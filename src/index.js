
function generatePoem(event){
    event.preventDefault();

    new Typewriter('#poem', {
        strings: ['Wie herrlich leuchtet Mir die Natur! '],
        autoStart: true,
        delay:1,
        cursor:"",
        loop:true,
      });
}


let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);