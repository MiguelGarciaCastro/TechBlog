const form = document.getElementById('add-post')
const nameInput = document.querySelector('input[name="name"]')
const authorInput = document.querySelector('input[name="author"]')
const categoryInput = document.querySelector('input[name="category"]')
const contentInput = document.querySelector('textarea[name="content"]')

form.addEventListener('submit', e => {
  e.preventDefault()
  const data = {
    name: nameInput.value,
    author: authorInput.value,
    category: categoryInput.value,
    content: contentInput.value,
  }
  console.log(data)
  fetch('/api/blogpost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.text())
    .then(text => alert(text))
    .catch(err => console.log(err))
})
