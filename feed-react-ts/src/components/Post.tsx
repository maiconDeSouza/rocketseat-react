import { Comment } from './Comment'
import { Image } from './Image'
import { User } from './User'


import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

type Text = {
    text: [] | string; 
}

interface PostProps {
    id: number;
    type: string;
    text:  Text;
}

interface CommentProps {
    id: number;
    name: string; 
    avatar: string;
    comment: string;
    time: string;
    likes: string;
}

interface InfoPost {
    id: number;
    name: string;
    status:string;
    hours:string;
    post: PostProps[];
    comment: CommentProps[];
}





export function Post({infoPost}: any){
    const [comment, SetComment] = useState([...infoPost.comment])
    const [newComment, SetNewComment] = useState('')

    function addComment(event:FormEvent){
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

    function textareaNewComment(event:ChangeEvent<HTMLTextAreaElement>){ 
        event.target.setCustomValidity('')
        SetNewComment(event.target.value)

    }
    function delComment(delComment: string){
        const commentWithoutDeleteOne = comment.filter(e => e.comment !== delComment)
        
        SetComment(commentWithoutDeleteOne)
    }

    function newCommentIvalid(event:InvalidEvent<HTMLTextAreaElement>){
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
                {infoPost.post.map((e: any) => {
                    if(e.type === 'p'){
                        return (
                            <p key={e.text}>{e.text}</p>
                        )
                    }
                    if(e.type === 'hashtag'){
                        let a;
                        {a = e.text.map((e:string) => {
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

