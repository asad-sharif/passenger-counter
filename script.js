const countDisplay = document.querySelector('.count');
const incrementButton = document.querySelector('.increment-btn')
const saveButton = document.querySelector('.save-btn')
const savedEntries = document.querySelector('.saved-entries')

let count = 0

function increment() {
    count++
    countDisplay.textContent = count
    countDisplay.removeAttribute('hidden', true)
}

function save() {
    let entry = document.createElement('li')
    entry.textContent = `Count: ${count}`
    savedEntries.appendChild(entry)

    savedEntries.removeAttribute('hidden', true)

    if (savedEntries.childElementCount >= 10) {
        alert('Max entry limit(10) reached. Lets start new log!')
        savedEntries.textContent = ''
        return;
    }

    count = 0
    countDisplay.textContent = count
}

incrementButton.addEventListener('click', increment)
saveButton.addEventListener('click', save)