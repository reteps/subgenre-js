# Subgenre.js

### Install

```
npm install subgenre.js
```
### Information

See how it was made [here](https://www.reddit.com/r/dataisbeautiful/comments/gfi9sv/oc_every_music_subgenre_built_from_everynoisecom/).
### Usage

```javascript
const subgenre = require('./subgenre')

genres = ["otacore", "east coast hip hop", "alternative r&b", "australian pop",'pop']

console.log(subgenre.topLevelGenre('glam metal')) // -> rock
console.log(subgenre.topLevelGenre('qwerty')) // -> __UNKNOWN__
console.log(`Indie Folk is ranked number ${subgenre.allGenres['indie folk']}`) // ->  65
console.log(`The most popular genre is ${subgenre.mostPopularGenre(genres)}`) // -> pop
console.log(`The least popular genre is ${subgenre.leastPopularGenre(genres)}`) // -> otacore
```
