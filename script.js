async function translateText() {

  const text = document.getElementById("inputText").value;

  const sourceLang =
    document.getElementById("sourceLang").value;

  const targetLang =
    document.getElementById("targetLang").value;

  if (text.trim() === "") {

    alert("Please enter text");

    return;
  }

  try {

    const url =
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("translatedText").innerText =
      data.responseData.translatedText;

  }

  catch (error) {

    console.log(error);

    alert("Translation failed!");
  }
}

function copyText() {

  const text =
    document.getElementById("translatedText").innerText;

  navigator.clipboard.writeText(text);

  alert("Copied Successfully!");
}

function speakText() {

  const text =
    document.getElementById("translatedText").innerText;

  const speech = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(speech);
}