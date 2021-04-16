const addBtn = document.getElementById('add')
const notes = JSON.parse(localStorage.getItem('notes'))//local browser API
//const notes = JSON.parse(sessionStorage.getItem('notes')) -> info gone after closing the browser
if(notes) {//fetch the stored notes
    notes.forEach(note => addNewNote(note))//add to the DOM
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {//argument text = nothing by default
    const note = document.createElement('div')//<div>
    note.classList.add('note')//<div class"note"">
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}" placeholder="Support Markdown syntax. Add notes here..."></textarea>
    `//textarea mode by default
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')//tag
    textArea.value = text
    main.innerHTML = marked(text)//markdown the text if it exists
    deleteBtn.addEventListener('click', () => {
        note.remove()//delete the note
        updateLS()
    })
    editBtn.addEventListener('click', () => {//decide textArea or main(can not edit in main div)
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
    textArea.addEventListener('input', event => {
        const { value } = event.target//any input/content in the text area
        main.innerHTML = marked(value)
        updateLS()
    })
    document.body.appendChild(note)//browser body
}
/*
    localStorage.setItem('name', JSON.stringify())
    JSON.parse(localStorage.getItem('name'))
    localStorage.removeItem('name')
    localStorage.clear() 
*/
function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note => notes.push(note.value))//push all contents
    localStorage.setItem('notes', JSON.stringify(notes))//key: notes, stringify the array
}