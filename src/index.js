function displayPoem(response){ 
    
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();

let instructionsInput=document.querySelector("#users-instruction");

let apiKey="081f8a4700411o4a8f603dtcb57dabaf";
let prompt=`Generate a German poem about ${instructionsInput.value}`;
let context="User instructions are: You are a Poem expert and now all German Poets. Your misision is to generate a  poem in German of a popular German Poet. Make sure to follow the user instructions and at the begin, inside <strong><strong/> element to write the name of the poem and of the author . Separate each line with a <br />";
let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt= ${prompt} &context=${context}&key=${apiKey}`;

console.log("generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);



axios.get(apiURL).then(displayPoem);
}

 
let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);