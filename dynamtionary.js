console.log("did someone invite dynamtionary to the party?");

const theDiv = document.querySelector("div")
const textArea = document.querySelector("textarea");
textArea.addEventListener("input", (inputEvent) => {
  const tokens = textArea.value.split(" ");
  const spans = tokens.map(str2Span)

  theDiv.innerHTML = '';
  theDiv.append(...spans)
  distinguishKnownWords();
});

function str2Span(str) {
  const span = document.createElement('span')
  span.innerText = str;
  return span
}

const knownWords = new Set();

const learnElem = document.getElementById('learn');
learnElem.addEventListener('keyup', (ev) => {
  if (ev.key === 'Enter') {
    knownWords.add(learnElem.value)
    learnElem.value = ''
    distinguishKnownWords();
  }
})

function distinguishKnownWords() {
    const spans = document.querySelectorAll("span");
    spans.forEach((elem) => {
        if (knownWords.has(elem.innerText)) {
            elem.classList.add("known");
        }
    });
}