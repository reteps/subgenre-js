const subgenre = require('./subgenre')

console.log(subgenre.topLevelGenre('glam metal'))

genres = ["otacore", "east coast hip hop", "alternative r&b", "australian pop",'pop']
console.log(`Indie Folk is ranked number ${subgenre.allGenres['indie folk']}`)
console.log(`The most popular genre is ${subgenre.mostPopularGenre(genres)}`)
console.log(`The least popular genre is ${subgenre.leastPopularGenre(genres)}`)

