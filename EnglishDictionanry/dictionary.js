const inputE1 = document.getElementById('input');
const infoTextE1 = document.getElementById('info-text');
const meaningContainerE1 = document.getElementById('meaning-container');
const titleE1 = document.getElementById('title');
const meaningE1 = document.getElementById('meaning');
const audioE1 = document.getElementById('audio');

async function fetchAPI(word) {
    try {
        infoTextE1.style.display = 'block';
        meaningContainerE1.style.display = 'none';

        infoTextE1.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        if (result.title) {
            meaningContainerE1.style.display = 'block';
            infoTextE1.style.display = 'none';
            titleE1.innerText = word;
            meaningE1.innerText = 'N/A';
        } else {
            infoTextE1.style.display = 'none';
            meaningContainerE1.style.display = 'block';
            titleE1.innerText = result[0].word;
            meaningE1.innerText = result[0].meanings[0].definitions[0].definition;
        }

        audioE1.style.display = 'inline-flex';
        if (result[0].phonetics && result[0].phonetics[0].audio) {
            audioE1.src = result[0].phonetics[0].audio;
        } else {
            audioE1.src = ''; // Set an alternative audio source or leave it empty if no audio is available
        }
    } catch (error) {
        console.log(error);
        infoTextE1.innerText = 'An error happened, try again later!';
    }
}

inputE1.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === 'Enter') {
        fetchAPI(e.target.value);
    }
});
