import { Comment } from './Comment'
import { Image } from './Image'
import { User } from './User'


import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Image 
                        avatar="https://avatars.githubusercontent.com/u/67662178?v=4"
                        comment="avatar"
                    />
                    <div className={styles.authorInfo}>
                        <User name="Maicon Souza" status="Web Developer"/>
                    </div>
                </div>
                <time title='11 de Maio às 08:22h' dateTime='2022-05-11 08:22:38'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Depois de estudar o maravilhoso vueJS agora faço meu primeiro projetinho reactJS. 🚀</p>


                <p className={styles.hash}>
                    <a href="#">#novoprojeto</a> 
                    <a href="#">#reactJS</a>
                    <a href="#">#front-end</a> 
                    <a href="#">#rocketseat</a>
                </p>
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
                <Comment 
                    name="Bill Gates" 
                    avatar="https://avatars.githubusercontent.com/u/16908999?v=4"
                    comment="Boa Maicon!!!"
                    time="45"
                    likes="58"
                />
                <Comment 
                    name="Steve Jobs"
                    avatar="https://avatars.githubusercontent.com/u/10639145?v=4"
                    comment="Parabéns, é isso ai!"
                    time="23"
                    likes="35"
                />
                <Comment 
                    name="Linus Torvalds"
                    avatar="https://avatars.githubusercontent.com/u/1024025?v=4"
                    comment="Show de Bola"
                    time="12"
                    likes="297"
                />

            </div>
        </article>
    )
}

