const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('server works!'));

notes = [];

app.post('/add-note',(req, res)=>{
    console.log(req.query)
    note = {title: req.query.title, description: req.query.description};

    notes.push(note)
    res.send(notes)
})


app.post('/remove-note',(req, res)=>{
    console.log(req.query)
    note = {title: req.query.title, description: req.query.description};
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

