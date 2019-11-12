import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Input = styled.input`
  font-size: 2rem;
  border: 3px solid black;
  border-radius: .5rem;
  color: darkkhaki;
  background: cadetblue;
  margin: 1px;
  text-shadow:  
    3px 3px 0 #000,
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;`

const Button = styled.button`
  font-size: 2rem;
  width: 10rem;
  color: cadetblue;
  font-weight: bold;
  background: darkkhaki;
  border: 3px solid black;
  border-radius: .5rem;
  margin: 1px;
  text-shadow:  
    3px 3px 0 #000,
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  :hover {
    color: darkkhaki;
    background: cadetblue;
  }
}`

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [charList, setCharList] = useState([]);

  const searchHandler = event => {
    axiosCall();
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const submitHandler = event => {
    event.preventDefault();
    // console.log(inputValue);
    // axiosCall();
    console.log(charList);
  };

  function axiosCall() {
    if (charList === [] || (charList !== [] && charList !== setCharList)) {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharList(response.data.results);
        // const charList = response.data.results;
        // const charNames = charList.filter(char => {
          // return char.name;
        })
        // console.log(charNames);
      // })
      .catch(error => {
        console.log("Error retrieving data: ", error);
      })
    } // if
  } // axiosCall



  return (
    <section className="search-form">
     {/* Add a search form here */}
     <form onSubmit={event => submitHandler(event)}>
       <label for="Search">
        <Input type='text' name='search' placeholder='Enter character name' onChange={event => searchHandler(event)} />
       </label>
       <Button>Search</Button>
     </form>
    </section>
  );
}
