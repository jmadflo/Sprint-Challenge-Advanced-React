import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from '../App'
import PlayerList from './PlayerList'

test("renders PlayerList without crashing", async() => {
  await render(<PlayerList />)
})


test("header renders", async() => {
    const { getByTestId, findByTestId} = await render(<App />)
    const h1 = findByTestId('h1')
})


test("search bar renders and accepts value", async() => {
    const { getByTestId, findByTestId } = await render(<PlayerList />)

    const searchInput = await findByTestId('search input')

    fireEvent.change(searchInput, {
        target: {name: 'SearchBar', value: 'Mor'}
    })
    
    // const player1 = await findByTestId('Alex Morgan')
    // const player2 = await findByTestId('Morgan Brian')
    
    // // Both players appear because they both contain the string Morgan
    // expect(player1).toBeVisible()
    // expect(player2).toBeVisible()

    // fireEvent.change(searchInput, {
    //     target: {name: 'SearchBar', value: 'Morgan Brian'}
    // })
    
    // // Only second player appears because only it contains the string Morgan Brian
    // expect(player1).not.toBeVisible()
    // expect(player2).toBeVisible()
})