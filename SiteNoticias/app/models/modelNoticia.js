

module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback) {
      connection.query('select * from noticias where id=2', callback)
    }
    return this;
}
