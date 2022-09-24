import styles from './Comment.module.css'
import Img from './Img'

export function Comment(){
    return (
        <div className={styles.comment}>
            <Img />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header></header>

                    <p>Muito Bom!!!</p>
                </div>
                <footer>Plaudir</footer>
            </div>
        </div>
    )
}