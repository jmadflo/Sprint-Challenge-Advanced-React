import React from 'react'

const PlayerCard = props => {
    const { name, country, searches, id } = props.player
    return (
        <div className='PlayerCard'>
            <h3>{name}</h3>
            <ul>
                <li>{country}</li>
                <li>{searches}</li>
                <li>{id}</li>
            </ul>
        </div>
    )
}

export default PlayerCard