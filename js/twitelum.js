import { Tweet } from './components/Tweet.jsx'

const tweetsDoServidor = [
    {
       conteudo: "Tweet servidor 1",
       qtLikes: 2
    },
    {
        conteudo: "Tweet servidor 2",
        qtLikes: 0
    },
    {
        conteudo: "Tweet servidor 3",
        qtLikes: 1
    }
]

setInterval(function() {
    console.log('Adicionando Tweet')
    tweetsDoServidor[0].conteudo = "MUDOU!!!!!"

    ReactDOM.render(
        tweetsDoServidor.map(
            tweet => Tweet(tweet.conteudo, tweet.qtLikes)
        ),
        document.querySelector('.tweetsArea')
    )
}, 5000)

ReactDOM.render(
    tweetsDoServidor.map(
        tweet => Tweet(tweet.conteudo, tweet.qtLikes)
    ),
    document.querySelector('.tweetsArea')
)