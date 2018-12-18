var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors())


var filmList = {
    "list" :[
        {
            "id": 1,
            "name" : "Scarface",
            "description": "Short description",
            "mark": 5,
            "year": 1983,
            "comment": "Cool",

        },
        {   
            "id": 2,
            "name" : "Starship Troopers",
            "description": "Short description",
            "mark": 4,
            "year": 1997,
            "comment": "Nice",
        },
        {
            "id": 3,
            "name" : "Gremlins",
            "description": "Short description",
            "mark": 5,
            "year": 1984,
            "comment": "Cool with kids",
        }
    ]
}


app.listen(8080, () => {
 console.log("Server running on port 8080");
});


app.get("/movie", (req, res, next) => {
   
    var filmId = req.query["id"];
    if (filmId ===undefined) {
        res.json(filmList);
    }else{
        
        /*var found = filmList.list.find(function(element) {
            return element.name === filmName;
        });*/
        res.json(filmList.list[filmId-1]);
    }

});

app.post("/addMovie", (req,res) =>{
    newFilmName = req.body['name'];
    newFilmYear = req.body['year'];
    newFilmDescription = req.body['description'];
    newFilmMark = req.body['mark'];
    newFilmComment = req.body['comment'];
    if((newFilmName !== undefined) && (newFilmYear !== undefined)) {
        newFilm ={
            "id": filmList.list.length+1,
            "name":newFilmName,
            "description": newFilmDescription,
            "mark": newFilmMark,
            "year": newFilmYear,
            "comment": newFilmComment
        }
        filmList.list.push(newFilm);
    }
});