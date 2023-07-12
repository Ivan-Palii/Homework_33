"use strict";

// 1
const fieldset = document.querySelector('#contents')

fieldset.addEventListener('click', (e) => {
	if (e.target.closest('a'))
		if(!confirm("Do you really want to follow the link?"))
			e.preventDefault()
})

// 2
const gallery = document.querySelector('#gallery')
const largeImg = document.querySelector('#largeImg')

gallery.addEventListener('click', (e) => {
	if (e.target.closest('a')) {
		largeImg.src = e.target.closest('a').href
		e.preventDefault()
	}
})


// 3

const list = document.querySelector('#ul')

list.addEventListener('click', (e) => {
	if (e.target.closest('li')) {
		const targetLi = e.target.closest('li')

		if (e.ctrlKey)
			targetLi.classList.toggle('selected')
		else {
			for (let liItem of list.children) {
				liItem.classList.remove('selected')
			}
			targetLi.classList.add('selected')
		}
	}
})