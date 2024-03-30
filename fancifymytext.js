// When the window is fully loaded, assign event handlers to the buttons and radio buttons.
window.onload = function() {
    document.getElementById("biggerBtn").onclick = makeTextBigger;
    document.getElementById("fancyShmancy").onchange = changeStyle; 
    document.getElementById("boringBetty").onchange = changeStyle;
    document.getElementById("mooBtn").onclick = mooText;
};

// Function to make the text in the textarea larger.
function makeTextBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

// Function to change the style of the text in the textarea based on the selected radio button.
function changeStyle() {
    var textArea = document.getElementById("userText");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to uppercase the text and add "-MOO" to the end of each sentence.
function mooText() {
    var textArea = document.getElementById("userText");
    // Spliting the text in the textarea into an array of sentences.
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim().toUpperCase() + "-MOO";
        }
    }
    // Joined the modified sentences back together and update the textarea value.
    textArea.value = sentences.join(". ");
}
