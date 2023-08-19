let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
let btn = document.querySelector('button');
let sound = document.querySelector("#sound");
btn.addEventListener('click', async function () {
   let h2 = document.querySelector('.h2');
   let result = document.querySelector('.result');
   let word = document.querySelector('input').value;
   word.value = '';
   fetch(`${url}${word}`)
   .then((response)=> response.json())
   .then((data)=>{
      console.log(data[0]);
   result.innerHTML = 
      `<div class="word">
        <h3>${word}</h3>
     <button class="vol" onclick="playSound()"><i class="fas fa-volume-high"></i></button>
     </div >
     <div class="details">
       <p id="part">${data[0].meanings[0].partOfSpeech}/</p>
       <p>  ${data[0].phonetic}</p>
     </div>

     <p class="word-mean">
       ${data[0].meanings[0].definitions[0].definition}
     </p>
     <p class="word-example">
      ${data[0].meanings[0].definitions[0].example}   
     </p>`;
     sound.src = `${data[0].phonetics[0].audio}`;
   }
   )

})
function playSound(){
  sound.play();
}


// async function meaning(word) {
//    try {
//       let data = await axios.get(url + word);
//       let ans = data.data[0].meanings[0].definitions[0].definition;
      
//       console.log(data.data[0].meanings[0].partOfSpeech);
//       return ans;
//    }
//    catch (err) {
//       console.log('Error occured');
//    }

