import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     {/* Add a search form here */}
     <form>
       <input type='text' name='search' placeholder='Enter character name' />
       <button>Search</button>
     </form>
    </section>
  );
}
