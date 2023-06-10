class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]/g, '')
  }

  static titleize(string) {
    const badList = ['the', 'a', 'an', 'but',
                      'of', 'and', 'for', 'at',
                      'by', 'from']
    const newArray = []
    const wordArray = string.split(' ')
    
    if(wordArray[0].length > 1) {
      wordArray[0].split('').splice(0, 1, wordArray[0][0].toUpperCase())
    }
    else {
      wordArray.splice(0, 1, wordArray[0].toUpperCase())
    }
    
    wordArray.map(word => {
      if(!badList.find(element => element === word)) {
        newArray.push(word[0].toUpperCase() + word.slice(1))
      }
      else {
        newArray.push(word)
      }
    })

    return newArray.join(' ')
  }

}

