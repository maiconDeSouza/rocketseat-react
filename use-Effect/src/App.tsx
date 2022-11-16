import { useState, useEffect } from "react"

export function App() {
  const [ list, setList ] = useState<string[]>([])
  const [ repo, setRepo ] = useState<string[]>([])
  const [ filter, setFilter ] = useState('')
  // const [ filterList, setFilterList ] = useState<string[]>([])


  function addToList(){
    setList(state => [...state, `Item ${state.length + 1}`])
  }

  function avisarAPI(){
    console.log('Lista Salva')
  }

  useEffect(() => {
    if(list.length !== 0){
      avisarAPI()
    }
  }, [list])

  useEffect(() => {
    fetch('https://api.github.com/users/maiconDeSouza/repos')
    .then(res => res.json())
    .then(data => setRepo(data.map((item:any) => item.name)))
  }, [])

  // useEffect(() => {
  //   setFilterList(repo.filter(item => item.includes(filter)))
  // }, [filter])

  const filterList = repo.filter(item => item.includes(filter))

  return (
    <div >
      <ul>
        {
          list.map(element => {
            return <li key={element}>{element}</li>
        })}
      </ul>
      <input 
        type="text"
        onChange={e => setFilter(e.target.value)} 
        value={filter}
      />
      <ul>
        {
          repo.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <hr />
      <ul>
        {
          filterList.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <button onClick={addToList}>Novo Item</button>
    </div>
  )
}


