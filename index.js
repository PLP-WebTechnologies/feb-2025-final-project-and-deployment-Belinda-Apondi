function getThePoem(response){
    new Typewriter('#thePoem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 80,
        cursor: "",
      });

}

function generatePoem(event){
    event.preventDefault();
    let actualWord = document.querySelector("#inputValue").value;

    let apiKey = "2284b36a4b14fat02fd5f23o7025e19a";
    let prompt =
    `Kindly generate a 5 line poem using this word, ${actualWord}. Make it intersting and eyecatching as well.Generate a poem in the same language as this prompt. If the prompt is in Kiswahili, write the poem in Kiswahili. If it is in Japanese, write it in Japanese, and so on for all languages.Dear AI, please generate a poem in the same language as my request. If I write in Portuguese, the poem should be in Portuguese  and so on for any language I use. Please always match the language of my request when generating the poem. Thank you! If someone prompts their name just write in English.`;
    let context =
    "Act as a professional poem generator. Your task is to create a classy, elegant, and neatly structured poem. The poem should evoke emotions, use rich imagery, and maintain a rhythmic flow. Focus on themes like nature, love, time, or introspection, and ensure the language is sophisticated yet accessible. Avoid clichés and aim for originality. Kindly make it a 5 line poem.generate a poem in the language of the input word";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(getThePoem);

}

let enterValue = document.querySelector("form");
enterValue.addEventListener("submit", generatePoem);