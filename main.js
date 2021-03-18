var button = document.querySelector('button');
var body = document.querySelector('body');
var text = document.querySelector('p');
var quotesDisplay = document.querySelector('#quotesDisplay');

const quotes = [
    '  <p class="text-4xl font-serif font-medium text-white leading-10">"In life, it’s not where you go – it’s who you travel with.” <br/><br/><span class="italic text-3xl">– Charles M. Schulz<span></span></p>',
    '  <p class="text-4xl font-serif font-medium text-white leading-10">"If you want to go quickly, go alone. If you want to go far, go together."<br/><br/><span class="italic text-3xl"> -African proverb</span></p>',
    '  <p class="text-4xl font-serif font-medium text-white leading-10">“Sometimes all you need is a great friend and thirst for adventure.” <br/><br/><span class="italic text-3xl">– Unknown</span></p>',
    '  <p class="text-4xl font-serif font-medium text-white leading-10">“Do what you can, with what you have, where you are.”<br/><br/><span class="italic text-3xl"> – Theodore Roosevelt.</span></p>',
];


const images = [
    ' "url(https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"',
    ' "url(https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)" ',
    ' "url(https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"',
]


button.addEventListener('click', changeQuote);

function changeQuote(e) {
    e.preventDefault();
    const quoteIndex = parseInt(Math.random()*quotes.length);
    const imageIndex = parseInt(Math.random()*images.length);
    text.innerHTML = quotes[quoteIndex];
    body.style.backgroundImage = images[imageIndex];
    quotesDisplay.style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+", 40)";
    button.style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+", 40)";  
}