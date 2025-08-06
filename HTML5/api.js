function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("setup").innerText = data.setup;
      document.getElementById("punchline").innerText = data.punchline;
    })
    .catch((err) => {
      console.error("Error fetching joke:", err);
    });
}
