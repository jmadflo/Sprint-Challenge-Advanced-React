import React from 'react'

const SearchBar = props => {
    
    return (
        <form>
            <input data-testid="search input" type="text" name="SearchBar" placeholder="Search Player By Name" value={props.searchInput} onChange={props.updateSearch} />
        </form>
    )
}

export default SearchBar