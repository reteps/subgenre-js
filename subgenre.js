const data = require('./genreset.json')
const getTLG = (genre) => {
    return (data[genre] == 'done') ? genre : getTLG(data[genre])
}

module.exports = { genre : getTLG }