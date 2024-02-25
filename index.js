const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// const GenerateJokes=()=>{
// const setHeader={
//   headers:{
//     Accept: "application/json"
//   }
// }
//   fetch('https://icanhazdadjoke.com',setHeader)
//   .then((res)=>res.json())
//   .then((data)=>{
//     jokes.innerHTML=data.joke}).catch((error)=>{console.log(error);})
// }
//now using the async and await  also using error handling in the java script
const GenerateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log("the error is${err}");
  }
};

jokeBtn.addEventListener("click", GenerateJokes);
GenerateJokes();
