var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors())


var filmList = {
    "list" :[
        {
            "name" : "Scarface",
            "year" : "1983"
        },
        {
            "name" : "Starship Troopers",
            "year" : "1998"
        },
        {
            "name" : "Gremlins",
            "year" : "1984"
        }
    ]
}


app.listen(8080, () => {
 console.log("Server running on port 8080");
});


app.get("/movie", (req, res, next) => {
   
    var filmName = req.query["name"];
    if (filmName ===undefined) {
        res.json(filmList);
    }else{
        
        var found = filmList.list.find(function(element) {
            return element.name === filmName;
        });
        res.json(found);
    }

});

app.post("/addMovie", (req,res) =>{
    console.log("in the post")
    console.log(req.body);
    newFilmName = req.body['name'];
    newFilmYear = req.body['year'];
    console.log(newFilmName+"   "+ newFilmYear )
    if((newFilmName !== undefined) && (newFilmYear !== undefined)) {
        newFilm ={
            "name":newFilmName,
            "year": newFilmYear
        }
        filmList.list.push(newFilm);
        console.log(filmList);
    }
});