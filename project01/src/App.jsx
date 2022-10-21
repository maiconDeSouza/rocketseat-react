import {Post} from './components/Post'
import {Header} from './components/Header'
import { Sidebar } from './components/Sidebar'

import style from './App.module.css'
import './global.css'


function App() {
  const post = [
    {
      id: 123,
      name: 'Maicon Souza',
      avatar: 'https://avatars.githubusercontent.com/u/67662178?v=4',
      status: 'Web Developer',
      hours: '1',
      post: [
        {
          id: 21,
          type: 'p',
          text: 'Fala galeraa 👋',
        },
        {
          id: 22,
          type: 'p',
          text: 'Depois de estudar o maravilhoso vueJS agora faço meu primeiro projetinho reactJS. 🚀'
        },
        {
          id: 23,
          type: 'hashtag',
          text: ['#novoprojeto', '#reactJS', '#front-end', '#rocketseat']
        }
      ],
      comment: [
        {
            id: 1,
            name: "Margaret Hamilton", 
            avatar: "https://avatars.githubusercontent.com/u/102490893?v=4",
            comment: "🚀🚀🚀🚀",
            time: "45",
            likes: "419"
        },
        {
            id: 2,
            name: "Bill Gates", 
            avatar: "https://avatars.githubusercontent.com/u/16908999?v=4",
            comment:"Boa Maicon!!!",
            time:"44",
            likes:"58"
        },
        {
            id: 3,
            name: "Steve Jobs",
            avatar: "https://avatars.githubusercontent.com/u/10639145?v=4",
            comment: "Parabéns, é isso ai!",
            time: "23",
            likes: "35"
        },
        {
            id: 4,
            name: "Linus Torvalds",
            avatar: "https://avatars.githubusercontent.com/u/1024025?v=4",
            comment: "Show de Bola",
            time: "12",
            likes: "297"
        }
    ]
    },
    {
      id: 124,
      name: 'Fábio Akita',
      avatar: 'https://avatars.githubusercontent.com/u/2840?v=4',
      status: 'Co-Founder at OmniTrade and Codeminer 42',
      hours: '2',
      post: [
        {
          id: 24,
          type: 'p',
          text: 'Testando lançar video no domingão. Continuando a saga de Linux, vamos ver uma das distros mais antigas, o Slackware, e com ele vou ensinar o que é um pacote como .DEB e como um APT e gerenciadores de pacote realmente funcionam. Não deixem de compartilhar!',
        },
        {
          id: 25,
          type: 'hashtag',
          text: ['#Linux', '#Slackware', '#Debian']
        }
      ],
      comment: []
    }
  ]

  
  return (
    <div>
      <Header />
      
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {post.map(e => {
            return (
              <Post key={e.id}  infoPost={e}/>
            )
          })}
          
        </main>
      </div>
    </div>
  )
}

export default App
 