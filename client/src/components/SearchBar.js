import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const SearchBar = props => {
    const [dataRendered, setDataRendered] = useLocalStorage(props.data)
    return (
        <form>
            <input data-testid="search input" type="text" name="SearchBar" placeholder="Search Player By Name" value={props.searchInput} onChange={props.updateSearch} />
        </form>
    )
}

export default SearchBar