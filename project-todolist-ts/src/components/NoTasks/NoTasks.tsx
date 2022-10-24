import { Clipboard } from 'phosphor-react'
import styles from './NoTasks.module.css'

export function NoTasks(){

    return (
        <div className={styles.container}>
            <Clipboard size={70}/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}