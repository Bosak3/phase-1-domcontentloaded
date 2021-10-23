//Key Take Aways:
            //DOMContentLoaded is the browsers bult-in way to indicate when a page's html is loaded into the DOM.
            //It is not possible to manipulate HTML elements that haven't rendered yet, so trying to manipulate the DOM before the page fully loads can potentially lead to problems.
            //We need to make sure to wait until after the DOMContentLoaded event is triggered to safely execute our code. 
            //By creating an even listener, we can keep our code from immediately firing when index.js is loaded.


// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
   return text.textContent = "This is really cool!"
})

// console.log('I\'m first!')