const fs=require(`fs`);
const zlib=require(`zlib`);
const gunZip=zlib.createGunzip();

const compressed=fs.createReadStream(`/Users/karemerakwizeragerard/Documents/MWP/Demo/project/cs445-2021-5-final-project`);

const uncompressed=fs.createWriteStream(`/Users/karemerakwizeragerard/Documents/MWP/Demo/project/cs445-2021-5-final-project`);

compressed.pipe(gunZip).pipe(uncompressed);