const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');

app.get('/london', function(req,res){
    res.writeHead(200, {"Content-Type":"video/mp4"});
    var rs = fs.ReadStream('test.mp4'); // import video into the project and provide video file name here for the "test.mp4"
    rs.pipe(res);
    console.log('device requested');
});

app.get('/america', function(req,res){
    res.writeHead(200, {"Content-Type":"video/mp4"});
    var rs = fs.ReadStream('test2.mp4'); // import video into the project and provide video file name here for the "test.mp4"
    rs.pipe(res);
    console.log('device requested');
});

app.get('/:id', (req,res) => {

    try{
        const id = req.params.id
        console.log(id);
        res.writeHead(200, {"Content-Type":"video/mp4"});
        if(id == 1){
            var rs = fs.ReadStream('test.mp4');
            rs.pipe(res);
        }
        else if(id == 2){
            var rs = fs.ReadStream('test2.mp4');
            rs.pipe(res);
        }
    }catch(err){
        res.send('BAD REQUEST');
    }   
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Streaming on port ${PORT}`);
});
