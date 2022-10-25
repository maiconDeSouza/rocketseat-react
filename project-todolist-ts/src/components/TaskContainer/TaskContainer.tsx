import { NoTasks } from '../NoTasks/NoTasks'

import styles from './TaskContainer.module.css'

export function TaskContainer(){

    return (
        <div className={styles.container}>
            <header>
                <p>
                    Tarefas criadas
                    <span>
                        0
                    </span>
                </p>
                <p>
                    Concluídas
                    <span>
                        0
                    </span>
                </p>
            </header>
            <main>
                <NoTasks />
            </main>
        </div>
    )
}