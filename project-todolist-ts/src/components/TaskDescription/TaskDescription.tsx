import { Trash } from 'phosphor-react'
import styles from './TaskDescription.module.css'

export function TaskDescription(){

    return (
        <div className={styles.container}>
            <div>
                <input type="checkbox" name="jbl" id="jbl" />
                <label htmlFor="jbl"><span></span></label>
            </div>
            <div className={styles.text}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <Trash />
            </div>
        </div>
    )
}