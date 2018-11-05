const app = require('express')()
const readline = require('readline');
const user = require('./Models/User')
const fs = require('fs');

app.listen(3000,()=> {console.log('App listening on port 3000')})

app.get('/', (req , res ) => { res.end('hello world !')})

// route appelé quand je veut créer un utilisateur
/*
app.get('/create/:ID/:Name/:Password', (req , res ) => {
    server.get('create/:p1', function(request, response) {
        var p1 = request.params.p1;
        console.log(p1);
        response.sendFile( __dirname  + '/page.html');
    });

})*/
app.get('/create/:ID/:name/:password', function(request, response) {
    var name = request.params.name;
    var ID = request.params.ID;
    var password = request.params.password;
    console.log("nom : " + name + " ID : " + ID + " password : " + password );

    var text = "{\"User\": [" +
        "{" + "\"ID\":" +  ID  + "," +
            "\"nom\":" +  "\" " + name +  "\" "  + "," +
            "\"mot_de_passe\":" +  "\" " + password +  "\" " +
        "}]}";
    //fs.writeFile('file.json', text , 'utf8');
    fs.writeFile('file.json', text)


    response.end();
});


