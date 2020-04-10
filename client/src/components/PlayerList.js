import React from 'react'
import PlayerCard from './PlayerCard'
import SearchBar from './SearchBar'

const PlayerList = props => {
    return(
        <div className="playerCardContainer">
            
            <SearchBar updateSearch={props.updateSearch} data={props.data} searchInput={props.searchInput}/>
            { props.dataRendered.map(player => {
                return <PlayerCard data-testid={`${player.name}`} player={player} key={player.id} />
            })}
        </div>
    )
    
}

export default PlayerList