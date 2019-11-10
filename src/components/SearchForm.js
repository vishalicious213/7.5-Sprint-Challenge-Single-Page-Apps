import React, { useState } from "react";
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
 
  return (
    <section className="search-form">
     {/* Add a search form here */}
     <form>
       <Input type='text' name='search' placeholder='Enter character name' />
       <Button>Search</Button>
     </form>
    </section>
  );
}
