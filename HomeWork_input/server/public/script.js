const input = document.getElementById("input");
const body = document.querySelector("body");

let timer;

input.addEventListener("input", (e) => {
  e.preventDefault();

  clearTimeout(timer);

  timer = setTimeout(async () => {
    const url = "/api/search";
    const value = e.target.value;

    try {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";
      const response = await fetch(`${url}?value=${value}`);
      const data = await response.json();
      console.log(data);

      data.map((el) => {
        const div = document.createElement("div");
        div.innerHTML = el.text;
        resultDiv.appendChild(div);
      });

      body.appendChild(resultDiv);
    } catch (err) {
      console.log(err);
    }
  }, 1500);
});
