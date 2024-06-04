import React, { useState } from "react"
import axios from "axios"
import SearchResults from "./SearchResults"
import './styles/SearchBar.scss'

const SearchBar = ({ results, setResults }) => { // use prop from Home
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

  const search = (input) => {
    setInput(input)
    console.log("search ", input)
  }  

  return (
    <div className="search-container">
      <div className="search-inner">
        <button className="search-button" onClick={() => search(input)}></button>
        <input 
          className="searchbar" 
          type="text" 
          placeholder="Search members..." 
          value={input} 
          onChange={(e) => handleChange(e.target.value)}
        />
        
      </div>
      <SearchResults results={results} />
    </div>
  )
}

export default SearchBar