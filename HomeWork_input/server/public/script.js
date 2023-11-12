const input = document.getElementById("input");
const body = document.querySelector("body");
const resultDiv = document.getElementById("result");

let timer;

input.addEventListener("input", (e) => {
  e.preventDefault();

  clearTimeout(timer);

  timer = setTimeout(async () => {
    const url = "/api/search";
    const value = e.target.value;

    resultDiv.innerHTML = "<h1 class='text-center'>Loading...</h1>"; // or some nice gif with loading animation

    try {
      const response = await fetch(`${url}?value=${value}`);
      const data = await response.json();
      console.log(data);

      if (!data.length) {
        resultDiv.innerHTML = "<h1 class='text-center'>No results :(</h1>";
        return; // important, otherwise function will continue
      }

      let result = "<div class='row'>";

      for (const article of data) {
        result += makeHtmlFromArticle(article);
      }

      result += "</div>";

      resultDiv.innerHTML = result;
    } catch (err) {
      resultDiv.innerHTML = "";
      console.log(err);
    }
  }, 1500);
});

const makeHtmlFromArticle = (article) => {
  return `<div class="col-sm-6 col-md-4 col-lg-3 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5> 
        <p class="card-text">${article.text}</p>
      </div>
    </div>
  </div>`;
};
