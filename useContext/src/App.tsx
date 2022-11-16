import { createContext, useContext, useState } from "react"

const CycleContext = createContext({} as any)
function NewCycleForm(){
  const { activeCycle, setActiveCycle } = useContext(CycleContext)
  return (
    <div>
      <h1>NewCycleForm : {activeCycle}</h1>
      <button onClick={() => setActiveCycle((state : any) => state + 1)}>Add +</button>
    </div>
  )
}

function Countdown(){
  const { activeCycle } = useContext(CycleContext)
  return <h1>Countdown : {activeCycle}</h1>
}

export function App() {
  const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CycleContext.Provider value={{activeCycle, setActiveCycle}}>
      <NewCycleForm />
      <Countdown />
    </CycleContext.Provider>
  )
}


