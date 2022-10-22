import { Image } from './Image'

import styles from './Sidebar.module.css'
import {PencilLine } from "phosphor-react"
import { User } from './User'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
            <div className={styles.profile}>
                <Image 
                    avatar="https://avatars.githubusercontent.com/u/67662178?v=4"
                    comment="avatar"
                />
                <User name="Maicon Souza" status="Web Developer"/>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}