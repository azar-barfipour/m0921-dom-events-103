const form = document.querySelector('#add')
const input = document.querySelector('#add-input')
const list = document.querySelector('#list')

form.addEventListener('submit', function(e){
    e.preventDefault()
    // console.log(e.target[0].value);
    if(!e.target[0].value) return;

    // const newEl = document.createElement('li')
    // newEl.innerHTML = `
    //     <p>${e.target[0].value}</p>
    //     <p>
    //         <i class="fa fa-pencil"></i>
    //         <i class="fa fa-times"></i>
    //     </p>
    // `

    // list.appendChild(newEl)

    // e.target[0].value = ''

    //create elements
    const li = document.createElement('li')
    const firstP = document.createElement('p')
    const secondP = document.createElement('p')
    const firstIcon = document.createElement('i')
    const secondIcon = document.createElement('i')
    const input = document.createElement('input')

    //create attributes
    firstIcon.className = "fa fa-pencil"
    secondIcon.className = "fa fa-times"
    input.className = "edit-note"
    input.setAttribute('type', 'text')

    firstP.textContent = e.target[0].value

    //appending stage
    secondP.appendChild(firstIcon)
    secondP.appendChild(secondIcon)
    li.appendChild(firstP)
    li.appendChild(secondP)
    // li.appendChild(input)
    list.appendChild(input)

    e.target[0].value = ''

})