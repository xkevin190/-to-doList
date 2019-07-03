const mongo = require("./connect");
const { DB_NAME } = require('./config') 

module.exports = {
    postFilm: function(film) {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").insertOne(film);
        return resp;
    },

    getFilterByID: function(id){
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").find({id}).toArray();
        return resp;
    },
    getFilms: function(film){
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").find().toArray();
        return resp 
    },
    DeleteByID: function(id){
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").deleteOne({id})
        return resp 
    }
}