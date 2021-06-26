//Best Solution using Stream 

const http=require(`http`);
const fs=require(`fs`);
const path=require(`path`);
http.createServer((req,res)=>{
    const readfile=fs.createReadStream(`/Users/karemerakwizeragerard/Documents/MWP/Demo/project/cs445-2021-5-final-project`)
    readfile.pipe(res);
}).listen(3000);

//Second solution using buffer,reading file asynchronously
http.createServer((req,res)=>{
    const readbuff=fs.readFile(`/Users/karemerakwizeragerard/Documents/MWP/Demo/project/cs445-2021-5-final-project`,(error,data)=>{
        if(error)throw error;
        res.write(data);
        res.end()
    })
}).listen(3000);

//Third solution using buffer,reading file synchronously

http.createServer((req,res)=>{
    const readSync=fs.readFileSync(`/Users/karemerakwizeragerard/Documents/MWP/Demo/project/cs445-2021-5-final-project`);
    res.write(readSync);
    res.end()
}).listen(3000);

