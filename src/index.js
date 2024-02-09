import { createMenu, } from './menu'
import { createHome, } from './home'
import { createContact, } from './contact'

const menuBtn = document.getElementById('menu')
const homeBtn = document.getElementById('home')
const contactBtn = document.getElementById("contact");

menuBtn.addEventListener("click", function() {
    createMenu()
})

homeBtn.addEventListener("click", function() {
    createHome()
})

contactBtn.addEventListener("click", function() {
    createContact()
})

