const quotesText = document.querySelector(".quotes");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name")
const soundBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy");
const twitterBtn  = document.querySelector(".twitter")
quoteBtn.addEventListener("click",randomQuote)
function randomQuote (){
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result)
        quotesText.innerText=result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading")
    })

}
soundBtn.addEventListener("click", ()=>{
  
    const utterThis = new SpeechSynthesisUtterance(`${ quotesText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterThis)
   

})


copyBtn.addEventListener("click", ()=>{
        navigator.clipboard.writeText(quotesText.innerText);
    });

twitterBtn.addEventListener("click",()=>{
    let twitterUrl =`https://twitter.com/intent/tweet?url=${quotesText.innerText}`
    window.open(twitterUrl, "_blank")
})

