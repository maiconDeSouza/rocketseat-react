import { Comment } from './Comment'
import { Image } from './Image'
import { User } from './User'


import styles from './Post.module.css'
import { useState } from 'react'


export function Post({infoPost}){
   
    const [comment, SetComment] = useState([...infoPost.comment])
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Image 
                        avatar={infoPost.avatar}
                        comment="avatar"
                    />
                    <div className={styles.authorInfo}>
                        <User name={infoPost.name} status={infoPost.status}/>
                    </div>
                </div>
                <time title='11 de Maio às 08:22h' dateTime='2022-05-11 08:22:38'>Publicado há {infoPost.hours}h</time>
            </header>
            <div className={styles.content}>
                {infoPost.post.map(e => {
                    if(e.type === 'p'){
                        return (
                            <p key={e.id}>{e.text}</p>
                        )
                    }
                    if(e.type === 'hashtag'){
                        let a;
                        {a = e.text.map(e => {
                            return <a>{e}{' '}</a>
                        })}
                        return <p key={e.text[0]}>{a}</p>
                    }
                })}
            
            </div>
            <form className={styles.commentForm}>
                <strong>Deixa seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comment.map(e => {
                    return (
                        <Comment 
                            key={e.id}
                            name={e.name}
                            avatar={e.avatar}
                            comment={e.comment}
                            time={e.time}
                            likes={e.likes}
                        />
                    )
                })}
            </div>
        </article>
    )
}

