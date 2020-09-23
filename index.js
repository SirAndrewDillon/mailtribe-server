const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send({Feel: 'Noise'})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n xxx Server reporting for duty on port ${PORT} xxx \n`);
});

// AIzaSyCmqPdLD4a36NREi8m-JgdbtqXrDpMyx5Q API Key
// 1023486174794-4fn3ksqff9on69p5cio4lv4jjv26qmtn.apps.googleusercontent.com Client ID
// 8hkjyOFF6-AZDPUNQAhcpGGu Client Secret
