import {Post} from './components/Post'
import {Header} from './components/Header'
import { Sidebar } from './components/Sidebar'

import style from './App.module.css'
import './global.css'


function App() {
  return (
    <div>
      <Header />
      
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Maicon Souza" 
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit libero eaque 
            ipsum nemo veritatis debitis magni magnam veniam sed quo quod sit cumque error sint 
            necessitatibus, ex a voluptate ducimus?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
 