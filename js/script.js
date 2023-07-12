"use strict";

// 1
/*
const input = document.querySelector('#hider')

input.addEventListener('click', function (e){
	text.style.display = 'none'
})*/

// 2
/*const input = document.querySelector('#hideOnClick')

input.addEventListener('click', function (e){
	input.style.display = 'none'
})*/

//3

const menu = document.querySelector('.menu')

menu.addEventListener('click', (e) => {
	if (e.target.closest('#listTitle'))
		menu.classList.toggle('open')
})

//4

const messages = document.querySelector('.messages')

const closeBtn = document.createElement('button')
closeBtn.innerHTML = '[x]'
closeBtn.classList.add('remove-button')

for (const elem of messages.children) {
	elem.prepend(closeBtn.cloneNode(true))
}

messages.addEventListener('click', (e) => {
	if (e.target.classList.contains('remove-button')) {
		e.target.closest('.pane').remove()
	}
})

//5

const carousel = document.querySelector('.carousel')
const list = document.querySelector('.carousel-list')

let translatePx = 0
const MAX_RIGHT = -(list.children.length - 3) * 130
const MIN_RIGHT = 0

console.log()

carousel.addEventListener('click', (e) => {
	if (e.target.classList.contains('arrow')) {
		if (e.target.innerText === '⇨') {
			translatePx -= translatePx - 390 >= MAX_RIGHT ? 390 : translatePx - MAX_RIGHT
			list.style.transform = `translateX(${translatePx}px)`
		} else if (e.target.innerText === '⇦') {
			translatePx += translatePx + 390 <= MIN_RIGHT ? 390 : Math.abs(translatePx)
			list.style.transform = `translateX(${translatePx}px)`
		}
	}
})

// 6

const field = document.querySelector('#field')
const fieldCoords = field.getBoundingClientRect()
const ball = document.querySelector('#ball')


field.addEventListener('click', (e) => {

	const left = e.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2
	const top = e.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2


	ball.style.left = `${left > 160 ? 160 : left < 0 ? 0 : left}px`
	ball.style.top = `${top > 110 ? 110 : top < 0 ? 0 : top}px`

	console.log(left)
	console.log(top)
	console.log('--------------------------------')
})