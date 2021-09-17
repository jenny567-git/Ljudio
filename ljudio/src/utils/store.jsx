import React, { useState, useContext } from "react";

export const StoreContext = React.createContext(null);

export function StoreProvider({ children }) {
  const [results, setResults] = useState([])
  const [currentSongId, setCurrentSongId] = useState()
  const [type, setType] = useState()
  const [isLoading, setLoading] = useState(true)
  const [getArtistResult, setArtistResult] = useState([])
  const [songResult, setSongResult] = useState([])
  const [getArtistId, setArtistId] = useState([])


  const store = {
    results: [results, setResults],
    currentSongId: [currentSongId, setCurrentSongId],
    type: [type, setType],
    isLoading: [isLoading, setLoading],
    artistResult: [getArtistResult, setArtistResult],
    songResult: [songResult, setSongResult],
    artistId: [getArtistId, setArtistId]
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
  
}
