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
