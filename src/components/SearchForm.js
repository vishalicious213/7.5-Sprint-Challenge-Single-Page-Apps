import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from './CharacterCard';

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
  let responseMonitor = [];

  const searchHandler = event => {
    if (charList === [] || (charList !== [] && charList !== responseMonitor)) {
      axiosCall();
      // console.log("charList: ", charList);
      // console.log("monitor: ", responseMonitor);
    };
    setInputValue(event.target.value);
    console.log(inputValue);
    charList.forEach(char => {
      if ((char.name.toLowerCase()).includes(inputValue.toLowerCase())) {
        // console.log(char.name);
        return (
          <section className="grid-view">
            {charList.map(char => {
              return (<CharacterCard key={char.id} name={char.name} species={char.species} type={char.type} status={char.status} gender={char.gender} origin={char.origin.name} location={char.location.name} imgSrc={char.image} />)
            })}
          </section>
        );}
    });
    // charList.name.forEach(console.log(charList.name.includes(inputValue)));
  };

  const submitHandler = event => {
    event.preventDefault();
    // console.log(inputValue);
    // console.log(charList);
  };

  function axiosCall() {
    // console.log("charList: ", charlist);
    // console.log("setCharList: ", setCharList);
    // if (charList === [] || (charList !== [] && charList !== setCharList)) {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharList(response.data.results);
        // console.log("Updated character list");
        responseMonitor = response.data.results;
        // console.log("monitor2: ", responseMonitor);
        // const charList = response.data.results;
        // const charNames = charList.filter(char => {
          // return char.name;
        })
        // console.log(charNames);
      // })
      .catch(error => {
        console.log("Error retrieving data: ", error);
      })
    // } // if
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
