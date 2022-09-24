import { Img } from './Img'
import styles from './Post.module.css'

import { Author } from './Author'


export function Post({nome, funcao, avatar}){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Img img={avatar}/>
                    <div className={styles.authorInfo}>
                        <Author nome={nome} funcao={funcao}/>
                    </div>
                </div>
                <time title='11 de Maio às 08:13h' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                <p>Vero officiis magni fuga nesciunt autem est voluptas blanditiis exercitationem nisi iure qui iste, itaque molestias, reprehenderit ratione pariatur accusamus voluptates at.</p>
                
                <p><a href="">#developer</a></p>
               
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    placeholder='Deixe seu cometário'
                />
                <button>Comentar</button>
            </form>
        </article>
    )
}