import React, { useState, useContext } from "react";

export const StoreContext = React.createContext(null);

export function StoreProvider({ children }) {
  const [results, setResults] = useState([])
  const [currentSong, setCurrentSong] = useState()
  const [type, setType] = useState()

  const store = {
    results: [results, setResults],
    currentSong: [currentSong, setCurrentSong],
    type: [type, setType]
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
  
}
