
// this way we can test server.js easily 
const app = require('./server')
app.listen(2222,()=>{
    console.log("server started at http://localhost:2222");
})


