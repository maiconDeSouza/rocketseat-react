import styles from './Img.module.css'

export function Img({img}){
    return (
        <img 
            className={styles.avatar}
            src={img}
        />
    )
}