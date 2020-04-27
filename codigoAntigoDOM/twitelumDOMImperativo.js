// Elementos DOM
const divTweetsArea = document.querySelector('.tweetsArea')
const formulario = document.querySelector('.novoTweet')
const textArea = document.querySelector('.novoTweet__editor')

// setInterval(adicionaTweetServidor, 5000)

function adicionaTweetServidor() {
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

    divTweetsArea.prepend(
        tweetsDoServidor
            .map(tweet => Tweet(tweet.conteudo, tweet.qtLikes))
            .join("") 
    )
}

formulario.addEventListener('submit', adicionarTweet)

function adicionarTweet(evento) {
    evento.preventDefault()

    const conteudo = textArea.value

    const articleTweet = Tweet(conteudo, 0)

    divTweetsArea.prepend(articleTweet)
}
