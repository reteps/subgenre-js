const data = require('./genreset.json')
const topLevelGenre = (genre) => {
    if (data[genre] == 'done') {
        return genre
    } else if (!data[genre]) {
        return '__UNKNOWN__' // an unknown genre
    }
    return topLevelGenre(data[genre])
}
const allGenres = Object.keys(data).reduce((obj, g, i) => {
    obj[g] = i
    return obj
}, {})
const mostPopularGenre = (genres) => {
    return genres.reduce((a, b) => {
        return (allGenres[a] < allGenres[b]) ? a : b
    })
}
const leastPopularGenre = (genres) => {
    return genres.reduce((a, b) => {
        return (allGenres[a] >  allGenres[b]) ? a : b
    })
}
module.exports = {
    topLevelGenre,
    allGenres,
    leastPopularGenre,
    mostPopularGenre
}