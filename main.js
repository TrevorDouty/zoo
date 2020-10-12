import Gorilla from './models/gorilla.js'


let bobo = new Gorilla("Bobo", "Black", 320, 5.5, true, 15, "male")
let booboo = new Gorilla("Booboo", "Chartreuse", 205, 5, true, 15, "female")
let crew = new Gorilla("Crew", "Red", 222, 4.7, false, 12, "female")
let dash = new Gorilla("Dash", "Rainbow", 255, 4.8, true, 25, "female")
let zelly = new Gorilla("Zelly", "White", 190, 4.7, false, 17, "female")
let ruger = new Gorilla("Ruger", "Striped", 315, 5.3, false, 30, "male")
let winston = new Gorilla("Winston", "Silver", 302, 5.8, false, 22, "male")
let momo = new Gorilla("Momo", "Blue", 276, 5, false, 19, "male")
let will = new Gorilla("Will", "Green", 205, 5.6, true, 23, "male")

let gorillas = [bobo, booboo, crew, dash, zelly, ruger, winston, momo, will]


function drawGorillas() {
  let template = ""
  gorillas.forEach(primate => template += /*html*/`
  <div class="col-6">
    <h1>${primate.name}</h1>
    <h3>${primate.age}</h3>
    <h3>${primate.gender}</h3>
    <h3>${primate.hairColor}</h3>
    <h3>${primate.height}</h3>
    <h3>${primate.weight}</h3>
    <h3>${primate.canSign}</h3>
  `)
  document.querySelector("#monkey").innerHTML = template
}


drawGorillas()