

const hash = document.location.hash

routing(hash)
function routing(hash) {
    switch (hash) {
        case '#add':
          alert('edd') 
          break;
        case '#movies':
             alert('movies') 
             break;     
    }


}

const nav = getElementByClass('navbar')
addEventListener 'cli'