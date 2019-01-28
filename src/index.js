import React from "react"
import ReactDOM from "react-dom"
import cake from "./images/cake.jpg"
import './estilo.css'

ReactDOM.render(<h1> Olá React</h1>, document.getElementById("app"))

var cakeImg = document.getElementById('cake')
cakeImg.src= cake
