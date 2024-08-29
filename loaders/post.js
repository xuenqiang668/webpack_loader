function post_loader(source) {
    console.log('post loader');
    const options = this.getOptions()
    console.log('options:', options);
    console.log('data', this.data);
    console.log('source', typeof source);
    return source
}


post_loader.pitch = function(q,l, data) {
    console.log('post_loader pitch3');
    data.name = 'post pitch'

}
module.exports = post_loader