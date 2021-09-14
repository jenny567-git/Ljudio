import React, { useState, useContext } from "react";

export const StoreContext = React.createContext(null);

export function StoreProvider({ children }) {
  // const teamMembersNames = ['John', 'Mary', 'Jason', 'David']

  // const [sharing, setSharing] = React.useState([])
  // const [help, setHelp] = React.useState([])
  // const [pairing, setPairing] = React.useState(teamMembersNames)
  const [results, setResults] = useState([]);

  const store = {
    // sharing: [sharing, setSharing],
    // help: [help, setHelp],
    // pairing: [pairing, setPairing],
    results: [results, setResults]
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
  
}
