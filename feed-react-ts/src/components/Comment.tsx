import { Image } from './Image'
import { ThumbsUp, Trash } from 'phosphor-react'


import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
    name: string;
    avatar: string;
    comment: string;
    time: string;
    likes: string;
    delComment: (delComment: string) => void;
}


export function Comment({name, avatar, comment, time, likes, delComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(Number(likes))

    function addLike(){
        // setLikeCount(likeCount + 1) assim da para ser feito, mas a melhor forma de ser feito é o de baixo
        setLikeCount(state => state + 1) //Melho forma de atualizar um valor
                        //ultimo estado - valor mais recente
                        //Sempre que vc for realizar uma atualização e valor dependa do valor anterior,
                        //usar essa estrategia 
    }
    
    function deleteComment(){
        delComment(comment)
    }
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

                        <button 
                            title='Deletar comentário'
                            onClick={deleteComment}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        {comment}
                    </p>
                </div>
                <footer>
                    <button onClick={addLike}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}