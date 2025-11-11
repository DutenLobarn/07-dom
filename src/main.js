console.log('Hello world')
// console.log(document)

const countButton = document.querySelector('#count-button')
const countOutput = document.querySelector('#count-output')

let clicks = 0

countButton.addEventListener('click', () => {
	console.log('klickade på knappen')
	clicks++
	if( clicks === 1 ) {
		countOutput.innerText = `Du har klickat ${clicks} gång.`
	} else {
		countOutput.innerText = `Du har klickat ${clicks} gånger.`
	}
})
