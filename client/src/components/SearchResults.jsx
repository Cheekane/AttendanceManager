import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./SearchResults.scss"

const SearchResults = ({results}) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/memberInfo/${id}`)
    }
    return (
        <div className="results-list"> 
            {results.map((result, id) => {
                return <div key={id} className="result-fullname" onClick={() => handleClick(result.id)}>{result.firstname} {result.lastname}</div>
            })}
        </div>
    )
}

export default SearchResults