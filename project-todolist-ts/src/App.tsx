import { Header } from './components/Header/Header'
import { Addtask } from './components/AddTask/AddTask'

import styles from './App.module.css'

export function App(){
  
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Addtask />
        
      </div>
    </div>
  )
}