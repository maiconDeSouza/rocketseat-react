import Logo from './assets/images/Logo.svg'

import './global.css'
import styles from './App.module.css'
import { AddTasks } from './components/AddTasks/AddTasks'
import { Tasks } from './components/Tasks/Tasks'


export function App(){

  return (
    <div className={styles.main}>
      
      <header>
        <img src={Logo} alt="logo" />
      </header>

      <AddTasks />

      <Tasks />
    </div>
  )
}