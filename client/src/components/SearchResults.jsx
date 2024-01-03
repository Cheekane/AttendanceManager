import React, { useState, useEffect } from "react"
import "./SearchResults.scss"

const SearchResults = ({results}) => {
    return (
        <div className="results-list"> 
            {results.map((result, id) => {
                return <div key={id} className="result-fullname">{result.firstname} {result.lastname}</div>
            })}
        </div>
    )
}

export default SearchResults