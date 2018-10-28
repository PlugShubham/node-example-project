var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());

var books =[
    {
        id:"123",
        name:"shubham"
    },
    {
        id:"124",
        name:"shubhi"
    }
]



//Read Operation
//nfdlfljdf
app.get('/books',function(req,res){
    res.json(books);
});

//Create
app.post('/books',function(req,res){
    //console.log(req.body.name);
    books.push(req.body8);
    res.send(books);
})

//PUT

app.put('/books',function(req,res){
    var name = req.body.name;
    for(var i=0;i<books.length;i++){
        if(books[i === name]){
            res.send("success")
        }else{
            res.send("failed")
        }
    }
})

app.delete('/books/:id',function(req,res){
    var id = req.params.id;
    
})


app.listen(8000);
