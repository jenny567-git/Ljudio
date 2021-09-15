import React, { useState, useContext } from "react";

export const StoreContext = React.createContext(null);

export function StoreProvider({ children }) {
  const [results, setResults] = useState([])
  const [currentSong, setCurrentSong] = useState()
  const [type, setType] = useState()
  const [isLoading, setLoading] = useState(true)

  const store = {
    results: [results, setResults],
    currentSong: [currentSong, setCurrentSong],
    type: [type, setType],
    isLoading: [isLoading, setLoading]
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
  
}
