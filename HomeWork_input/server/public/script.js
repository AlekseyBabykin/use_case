const input = document.getElementById("input");
const body = document.querySelector("body");

let timer;

input.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("tomer1=>", timer);
  clearTimeout(timer);
  console.log("tomer2=>", timer);
  timer = setTimeout(async () => {
    const url = "http://localhost:5000/api/search";
    const value = e.target.value;
    console.log("tomer3=>", timer);

    try {
      const response = await fetch(`${url}?value=${value}`);
      const data = await response.json();
      console.log(data);
      const div = document.createElement("div");
      const text = document.createTextNode(JSON.stringify(data));
      div.appendChild(text);
      body.appendChild(div);
    } catch (err) {
      console.log(err);
    }
  }, 1500);
});
