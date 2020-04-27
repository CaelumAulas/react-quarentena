import { TweetCabecalho } from './TweetCabecalho.jsx'
import { TweetRodape } from './TweetRodape.jsx'

export function Tweet(conteudo, qtLikes) {
    return React.createElement('article', {class: "tweet"}, [
        TweetCabecalho("http://placehold.it/50x50"),
        <p class="tweet__conteudo"> ${conteudo} </p>,
        TweetRodape(qtLikes)
    ])
}