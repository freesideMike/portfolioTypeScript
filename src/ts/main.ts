import './../scss/style.scss'
import { Photography } from './models/Photography';

const photosContainer = document.getElementById("photosContainer");

const photo = ["codeImg", "boat", "airportPlayground", "autumnStreetSign", "babyFeet","blueKid", "closingTime", "duck","family", "girlDancing", "happyPeople", "IKEAworker", "kultur", "noPicturesPlease", "openCardoor", "snail", "tramStockholm", "tunnel", "woodenBridge"];


const photographies:Photography[] = [];

for (let i = 0; i<photo.length; i++){
    const p = new Photography(photo[i], "./../src/img/" + photo[i] + ".jpg");
    console.log(photo[i]);
    console.log(p);
    photographies.push(p);
    console.log(photographies);
} 

console.log(photographies);

for (let i = 0; i < photographies.length; i++) {
    const image = document.createElement("img");
    image.src = photographies[i].url;
    console.log(photographies);
    photosContainer?.appendChild(image);
    image.className = "image";
}