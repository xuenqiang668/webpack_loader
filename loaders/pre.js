function pre_loader(source) {
    console.log('pre loader');
    return source
}

pre_loader.pitch = function() {
    console.log('pre pitch1');
}

module.exports = pre_loader