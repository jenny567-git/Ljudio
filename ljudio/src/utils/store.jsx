import React, { useState, useContext } from "react";

export const StoreContext = React.createContext(null);

export function StoreProvider({ children }) {
  const [results, setResults] = useState([])
  const [currentSongId, setCurrentSongId] = useState()
  const [type, setType] = useState()
  const [isLoading, setLoading] = useState(true)
  const [artistResult, setArtistResult] = useState([])
  const [songResult, setSongResult] = useState()
  const [isPlaying, setPlaying] = useState(false);

  const store = {
    results: [results, setResults],
    currentSongId: [currentSongId, setCurrentSongId],
    type: [type, setType],
    isLoading: [isLoading, setLoading],
    artistResult: [artistResult, setArtistResult],
    songResult: [songResult, setSongResult],
    isPlaying: [isPlaying, setPlaying]
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
  
}
