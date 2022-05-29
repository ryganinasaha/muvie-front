const content = document.querySelector('.content')
const nav = document.querySelector('.navbar')

const hash = document.location.hash
content.innerHTML = hash

nav.addEventListener('click', function(event) {
     const tagName = event.target.tagName
     const href = event.target.getAttribute('href')
     console.log(tagName)

     if (tagName === 'A') {
      content.innerHTML = href
     }
    
}) 