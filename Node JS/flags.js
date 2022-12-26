function getFlagValue(flag){
    const index = porcess.argv.indexOf(flag) + 1
    return porcess.argv[index]
}

module.exports = getFlagValue;