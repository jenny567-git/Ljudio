// https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm

import React, { useState, useContext } from "react";

export const StoreContext = React.createContext(null);

export function StoreProvider({ children }) {
  const [results, setResults] = useState()
  const [currentSongId, setCurrentSongId] = useState()
  const [type, setType] = useState()
  const [isLoading, setLoading] = useState(true)
  const [artistResult, setArtistResult] = useState()
  const [songResult, setSongResult] = useState()
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(20);

  const store = {
    results: [results, setResults],
    currentSongId: [currentSongId, setCurrentSongId],
    type: [type, setType],
    isLoading: [isLoading, setLoading],
    artistResult: [artistResult, setArtistResult],
    songResult: [songResult, setSongResult],
    isPlaying: [isPlaying, setPlaying],
    volume: [volume, setVolume]
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
  
}
