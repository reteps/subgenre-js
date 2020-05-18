const subgenre = require('./subgenre')

console.log(subgenre.topLevelGenre('beatlesque'))

genres = ["album rock", "art rock", "beatlesque", "classic rock", "folk rock", "mellow gold", "rock", "soft rock"]
console.log(`Indie Folk is ranked number ${subgenre.allGenres['indie folk']}`)
console.log(`The most popular genre is ${subgenre.mostPopularGenre(genres)}`)
console.log(`The least popular genre is ${subgenre.leastPopularGenre(genres)}`)

