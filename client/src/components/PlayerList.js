import React from 'react'
import PlayerCard from './PlayerCard'
import SearchBar from './SearchBar'
import useDarkMode from '../hooks/useDarkMode'

const PlayerList = props => {
    const [darkMode, setDarkMode] = useDarkMode(false)

    const toggleBackground = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return(
        <div className="playerCardContainer">
            <SearchBar updateSearch={props.updateSearch} data={props.data} searchInput={props.searchInput}/>
            <button onClick={toggleBackground}>Toggle Background</button>
            {props.dataRendered? props.dataRendered.map(player => {
                return <PlayerCard data-testid={`${player.name}`} player={player} key={player.id} />
            }): null}
        </div>
    )
    
}

export default PlayerList