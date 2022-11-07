const jokeButton = document.querySelector('.new-joke');
window.addEventListener("load", fetchJoke);
jokeButton.addEventListener('click', fetchJoke);

const punchlineButton = document.querySelector("punchline");
punchlineButton.addEventListener("click", showPunchline);

const endpoint = 'https://official-joke-api.appspot.com/random_joke';
var punchline = "";

async function fetchJoke() {
    // console.log("clicked button")
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    let setup = json_response["setup"];
    punchline = json_response["punchline"];

    showJoke(setup);

    // if (text) {
    //     let json_response = JSON.parse(response);
    //     displayQuote(json_response.joke);
    //     displayQuote(json_response);


    // }
    // else {
    //     console.log('error, could not fetch joke');
    //     alert('error, could not fetch joke')
    // }
}

function showJoke(x) {
    // console.log(x);
    document.getElementById('js-joke-text').textContent = x;
    document.getElementById("js-punchline-text").textcontent = "";
}

function showPunchline() {
    // console.log(x);
    document.getElementById("js-punchline-text").textcontent = punchline;
    console.log("this is a punchline :P");
}

// fetchJoke();

// some of the jokes have a set up and delivery, some are just a joke
// set up an if statement that indexes these two
// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/