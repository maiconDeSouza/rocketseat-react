import { Comment } from './Comment'
import { Image } from './Image'
import { User } from './User'


import styles from './Post.module.css'
import { useState } from 'react'



export function Post({infoPost}){
    const [comment, SetComment] = useState([...infoPost.comment])
    const [newComment, SetNewComment] = useState('')

    function addComment(event){
        event.preventDefault()
        const objComment = {
            name: 'Maicon Souza',
            avatar: 'https://avatars.githubusercontent.com/u/67662178?v=4',
            comment: newComment,
            time: 0,
            likes: 0
        }
        
        SetComment([...comment, objComment])
        SetNewComment('')
    }

    function textareaNewComment(){ 
        event.target.setCustomValidity('')
        SetNewComment(event.target.value)

    }
    function delComment(delComment){
        const commentWithoutDeleteOne = comment.filter(e => e.comment !== delComment)
        
        SetComment(commentWithoutDeleteOne)
    }

    function newCommentIvalid(){
        event.target.setCustomValidity('Este Campo é Obrigatório')
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Image 
                        avatar={infoPost.avatar}
                        comment="avatar"
                    />
                    <div className={styles.authorInfo}>
                        <User name={infoPost.name} status={infoPost.status} />
                    </div>
                </div>
                <time title='11 de Maio às 08:22h' dateTime='2022-05-11 08:22:38'>Publicado há {infoPost.hours}h</time>
            </header>
            <div className={styles.content}>
                {infoPost.post.map(e => {
                    if(e.type === 'p'){
                        return (
                            <p key={e.text}>{e.text}</p>
                        )
                    }
                    if(e.type === 'hashtag'){
                        let a;
                        {a = e.text.map(e => {
                            return <a key={e}>{e}{' '}</a>
                        })}
                        return <p key={e.text[0]}>{a}</p>
                    }
                })}
            
            </div>
            <form className={styles.commentForm} onSubmit={addComment}>
                <strong>Deixa seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                    name='valueComment'
                    onChange={textareaNewComment}
                    value={newComment}
                    onInvalid={newCommentIvalid}
                    required
                />
                <footer>
                    <button disabled={newComment.length === 0}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comment.map(e => {
                    return (
                        <Comment 
                            key={e.comment}
                            name={e.name}
                            avatar={e.avatar}
                            comment={e.comment}
                            time={e.time}
                            likes={e.likes}
                            delComment={delComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}

