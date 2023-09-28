class Info {
    constructor(contenidoStr, contenidoObj, size) {
        const me = this
        me.contenidoStr = contenidoStr;
        me.contenidoObj = contenidoObj;
        me.size = size;
    }


    getInfo() {
        return `ContenidoStr ${this.contenidoStr} - ContenidoObj ${this.contenidoObj} - TamañoBytes ${this.size}`
    }



}
module.exports = {Info}


