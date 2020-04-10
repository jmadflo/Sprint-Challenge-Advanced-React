import React from 'react'

const PlayerCard = props => {
    const { name, country, searches, id } = props.player
    return (
        <div className='PlayerCard'>
            <h3>{name}</h3>
            <ul>
                <li>Country: {country}</li>
                <li>Number of searches: {searches}</li>
                <li>Id: {id}</li>
            </ul>
        </div>
    )
}

export default PlayerCard