const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    // console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    // console.log(JSON_response);
    displayQuote(json_response.message);
    // .then(text => text.text());
    // console.log(text);
}

function displayQuote(x) {
    // const quoteBox = document.querySelector('#js-quote-text');
    // console.log('display quote working');
    // const textMessage = document.createTextNode(x);

    // quoteBox.appendChild(textMessage);
    console.log(x);
    document.getElementById('js-quote-text').textContent = x;
}

getQuote();