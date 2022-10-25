import { PlusCircle } from 'phosphor-react'

import styles from './Addtask.module.css'

export function Addtask(){

    return (
        <form className={styles.containerForm}>
            <input 
                type="text"
                placeholder='Adicione uma nova tarefa' 
            />
            <button>
                Criar 
                <PlusCircle />
            </button>
        </form>
    )
}