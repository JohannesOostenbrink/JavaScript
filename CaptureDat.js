
//Use the document.querySelector() method to query the h1 element on the page and assign it to the variable named h1.
//var h1 = document.querySelector('h1')

var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
    ]


handleClicks(){
    switch(h1.innerText){
        case arr [0]: h1.innerText = arr[1]
        break;
        case arr[1]: h1.innerText = arr[2]
        break;
        case arr[2]: h1.innerText = arr[3]
        break;
        case
        default: h1.innerText = arr[0]
        break;
            
        }
        }

h1.addEventListener(click, handleClicks); 