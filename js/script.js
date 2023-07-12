"use strict";

// 1
const fieldset = document.querySelector('#contents')

fieldset.addEventListener('click', (e) => {
	if (e.target.closest('a'))
		if (!confirm("Do you really want to follow the link?"))
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

// 4

const tree = document.querySelector('#tree')

tree.addEventListener('click', (e) => {
	if (e.target.closest('span') && e.target.closest('li').children.length !== 1) {
		e.target.closest('li').children[1].classList.toggle('hidden')
	}
})

// 5

const table = document.querySelector('#grid')
const rows = Array.from(table.querySelectorAll('tbody tr'))


table.addEventListener('click', (e) => {


	if (e.target.closest('th')) {
		const tColumn = e.target.closest('th')
		let sortFunc
		switch (tColumn.dataset.type) {
			case 'number':
				sortFunc = (a, b) => Number.parseInt(a.cells[tColumn.cellIndex].textContent) -
					Number.parseInt(b.cells[tColumn.cellIndex].textContent)
				break
			case 'string':
				sortFunc = (a, b) => a.cells[tColumn.cellIndex].textContent >
					b.cells[tColumn.cellIndex].textContent ? 1 : -1
				break
		}

		rows.sort(sortFunc).forEach(e => table.children[1].append(e))
	}
})

// 6


let tooltip= document.createElement('div')
tooltip.classList.add('tooltip')

document.addEventListener('mouseover', (e) => {
	if (e.target.dataset.tooltip) {
		const target = e.target
		const targetCoords = target.getBoundingClientRect()

		tooltip.innerHTML = target.dataset.tooltip
		document.body.append(tooltip)

		let left = targetCoords.left + (target.offsetWidth - tooltip.offsetWidth)/2
		left = left < 0 ? 0 : left

		let top = targetCoords.top - tooltip.offsetHeight - 5
		top = top < 0 ? targetCoords.top + target.offsetHeight + 5 : top

		tooltip.style.left = `${left}px`
		tooltip.style.top = `${top}px`
	}
})
document.addEventListener('mouseout', (e) => {
	if (e.target.dataset.tooltip) {
		tooltip.remove()
	}
})
