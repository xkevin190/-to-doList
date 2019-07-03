const API_PATH = '/api';
const films = require("../../resources/films");
const { postFilm , getFilms , getFilterByID, DeleteByID } = require("../../db");

module.exports = (app) => {
    app.get(`${API_PATH}/films`, async (req, res)=>{
       const data = await getFilms()
       console.log(data)
       return res.json(data)
    });

    app.get(`${API_PATH}/films/:id`, async (req, res)=>{
        const id = req.params.id;
        const film = await getFilterByID(id)
        res.json(film);    
    });

    app.get(`${API_PATH}/films/:id`, async (req, res)=>{
        const id = req.params.id;
        const film = await getFilterByID(id)
        res.json(film);    
    });

    app.delete(`${API_PATH}/filmss/:id`, async (req, res)=>{
        const id = req.params.id
        if (id) { 
            const resp = await DeleteByID(id);
            return res.json(resp);
        }
        res.status(400).send({ reason: "No id send." });
    })
}