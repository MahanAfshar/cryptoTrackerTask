import React, { useState } from 'react'
import Header from './components/Header'
import CoinsList from './components/CoinsList'

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header setSearch={setSearch}/>
      <CoinsList search={search}/>
    </>
  )
}

export default App