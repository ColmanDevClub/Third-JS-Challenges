

const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const CitiesArr = [];
fetch(api)
  .then(api2 => api2.json())
  .then(data => cities.push(...data));


function FindSimillarWord(WordToFind,CitiesArr){
  CitiesArr.filter(MatchCities=>{
    const value= new RegExp(WordToFind,'gi');
    return(MatchCities.city.match(value)||MatchCities.state.match(value))});
  }

  function ShowLiveMatches(Input){
    let Word = Input.value;
    let MatchesArr = FindSimillarCity(Word,CitiesArr);
   
  
  }

  const Input = document.querySelector('.search').addEventListener('change',ShowLiveMatches);
 
