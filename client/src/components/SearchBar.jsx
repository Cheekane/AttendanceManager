import React, { useState, useEffect } from "react"
import axios from "axios"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    // function to fetch data based on the search term
    const fetchSearchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/members?search=${searchTerm}`)
        setSearchResults(res.data)
      } catch (error) {
        console.error("Error fetching search results:", error)
      }
    }

    // call the function when searchTerm changes
    fetchSearchResults()
  }, [searchTerm])

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search members..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{`${result.firstname} ${result.lastname}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar