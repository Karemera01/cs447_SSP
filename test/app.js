const express=require(`express`);
const app=express();

app.set(`port`,process.env.process.PORT)


app.listen(5000,()=>{console.log("listen on server 5000")});