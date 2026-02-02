const debouncer = (func,delay) => {
    let timeoutId
    return function() {
        if(timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(func,delay)
    }
}

module.exports =  { debouncer }