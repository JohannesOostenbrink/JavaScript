// call letterfinder

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
            } else {
        console.log('---No Match Found At', i)
        }
    }
}

letterFinder('test', 't')