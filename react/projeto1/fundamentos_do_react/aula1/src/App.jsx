import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import avatar from './img/profile.jpg'

class Pessoa{
  constructor(nome, funcao, avatar){
    this.nome = nome
    this.funcao = funcao
    this.avatar = avatar
  }
}

const maicon = new Pessoa('Maicon Souza', 'Web Developer', avatar)

const fabiana = new Pessoa('Fabiana Ferreia', 'Ceo Google', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=50')



export function App() {
  

  return (
    <>
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post nome={maicon.nome} funcao={maicon.funcao} avatar={maicon.avatar}/>
        <Post nome={fabiana.nome} funcao={fabiana.funcao} avatar={fabiana.avatar}/>
      </main>

     </div>
    </>
  )
}


