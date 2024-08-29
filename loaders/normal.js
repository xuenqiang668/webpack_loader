function normal_loader(source) {
    console.log('normal loader');

    console.log('source', typeof source);
    return source
}

normal_loader.row = true

normal_loader.pitch = function(remainingRequest, precedingRequest, data) {
    console.log('normal pitch2');
    data.name = 'fusing normal'
    // emit fusing
    // return '222'
}


module.exports = normal_loader