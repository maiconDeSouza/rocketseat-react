import { PlusCircle } from 'phosphor-react'
import styles from './AddTasks.module.css'

export function AddTasks(){

    return (
        <div className={styles.container}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>
                Criar 
                <PlusCircle />
            </button>
        </div>
    )
}