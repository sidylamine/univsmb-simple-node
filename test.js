/*const fs = require('fs')
const { stringify } = require('querystring')


class Fichier {


    constructor(monfichier){
        this.monfichier = monfichier
    }
    Lire(){
        this.contenu = fs.readFileSync(this.monfichier)
    }
    Ecrire(){

    }
    supprimer(){
        fs.truncateSync(monfichier)
    }
    Affichage(){
        if(undefined != this.contenu)
        console.log("Mon contenu :  \n " + this.contenu)
    }
}
let monfichier = new Fichier('monfichier.txt')
monfichier.Lire()
monfichier.Ecrire()
monfichier.supprimer()   

//QUESTION 2
class GestionFichierJson {
     Lirejson(){
         this.lire(this.fichier)
         this.contenuJson = JSON.parse(this.contenu)
         console.log(this.contenu)
         console.log(this.contenuJson)
         console.log(this.contenuJson.model)


     }
     EcrireJson(){
         this.contenuJson[cle]= valeur
         this.supprimer()
         this.Ecrire(JSON.stringify(this.contenuJson))

}*/

/*
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const process = require('process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}*/

// creation client
const http2 = require('http2');
const client = http2.connect('https://example.org');

client.on('altsvc', (alt, origin, streamId) => {
  console.log(alt);
  console.log(origin);
  console.log(streamId);
});

