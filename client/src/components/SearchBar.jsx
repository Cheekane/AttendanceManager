import React, { useState, useEffect } from "react"
import axios from "axios"
import SearchResults from "./SearchResults"

const SearchBar = ({setResults}) => { // use prop from Home
  const [input, setInput] = useState("")

  const fetchData = async (value) => {
    try {
      // API request gets members with input value like firstname
      if (value !== "") {
        const res = await axios.get(`http://localhost:8800/members/${value}`)
        // set results state to API request data from members
        setResults(res.data)
      } else {
        setResults([])
      }
      
    } catch (error) {
      console.error("Error fetching search results: ", error)
    }
  }

  // handles the input change on the searchbar
  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  const search = (search) => {
    setInput(search)
    console.log("search ", search)
  }  

  return (
    <div className="searchContainer">
      <div className="searchInner">
        <input 
          className="searchbar" 
          type="text" 
          placeholder="Search members..." 
          value={input} 
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="button__search" onClick={() => search(input)}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar