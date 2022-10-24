import { NoTasks } from '../NoTasks/NoTasks'
import { TaskDescription } from '../TaskDescription/TaskDescription'

import styles from './Tasks.module.css'

export function Tasks(){

    return (
        <div className={styles.container}>
            <header>
                <p>
                    Tarefas criadas
                    <span>0</span>
                </p>
                <p>
                    Concluídas
                    <span>0</span>
                </p>
            </header>
            <main>
                {/* <NoTasks /> */}
                <TaskDescription />
            </main>
        </div>
    )
}