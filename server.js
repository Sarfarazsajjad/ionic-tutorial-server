const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;
var bodyParser = require('body-parser')



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('server works!'));

notes = [];

app.get('/get-notes',(req,res)=>{
    console.log('get notes api hit')
    return res.send(notes);
});

app.post('/add-note',(req, res)=>{
    console.log(req.body)
    note = {title: req.body.title, description: req.body.description};
    notes.push(note)
    res.json(notes)
})


app.post('/remove-note',(req, res)=>{
    console.log(req.body)
    note = {title: req.body.title, description: req.body.description};
    var index = notes.indexOf(note); // get index if value found otherwise -1
    for(let i=0; i<notes.length;i++){
        if(notes[i].title === note.title && notes[i].description === note.description)index = i;
    }
    if (index > -1) { //if found
        notes.splice(index, 1);
    }
    res.send(notes);
})

app.listen(port, () => console.log(`server listening on port ${port}!`));

