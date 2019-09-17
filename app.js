const express = require('express');
const app = express();
const fs = require('fs');

app.get('/all', function(req,res){
    res.writeHead(200, {"Content-Type":"video/mp4"});
    var rs = fs.ReadStream('test.mp4'); // import video into the project and provide video file name here for the "test.mp4"
    rs.pipe(res);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Streaming on port ${PORT}`);
});