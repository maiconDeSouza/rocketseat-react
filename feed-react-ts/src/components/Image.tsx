import styles from './Image.module.css'

export function Image({avatar, comment}){
    return (
        <img 
            className={styles[comment]}
            src={avatar} 
        />
    )
}