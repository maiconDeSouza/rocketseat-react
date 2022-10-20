import { Image } from './Image'
import { ThumbsUp, Trash } from 'phosphor-react'


import styles from './Comment.module.css'


export function Comment({name, avatar, comment, time, likes}){
    return (
        <div className={styles.comment}>
            <Image 
                avatar={avatar}
                comment="avatarComment"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{name}</strong>
                            <time title='11 de Maio às 08:22h' dateTime='2022-05-11 08:22:38'>Cerca de {time} Minutos atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        {comment}
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}