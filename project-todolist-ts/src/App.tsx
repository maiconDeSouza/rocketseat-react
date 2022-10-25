import { Header } from './components/Header/Header'
import { Addtask } from './components/AddTask/AddTask'
import { TaskContainer } from './components/TaskContainer/TaskContainer'


import styles from './App.module.css'


export function App(){
  
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Addtask />
        <TaskContainer />
      </div>
    </div>
  )
}