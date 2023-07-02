let ul = document.querySelector(".city");
let search = document.querySelector(".search");
let searchButton = document.querySelector(".search-button");

let dataSearch = [];

fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) => {
    dataSearch = data;

    data.map((el) => {
      ul.innerHTML += `<div class="card">
            <img src="${el.flag}" alt="" />
            <div class="name">
              <h2>${el.name}</h2>
              <p>${el.capital}</p>
            </div>
          </div>`;
    });
  });

search.addEventListener("keyup", (e) => {
  ul.innerHTML = null;

  dataSearch
    .filter((el) => {
      const country = `${el.name} ${el.capital}`;

      return country.toLowerCase().includes(search.value.trim().toLowerCase());
    })
    .map((el) => {
      ul.innerHTML += `<div class="card">
        <img src="${el.flag}" alt="" />
        <div class="name">
          <h2>${el.name}</h2>
          <p>${el.capital}</p>
        </div>
      </div>`;
    });
});

searchButton.addEventListener("click", () => {
  dataSearch
    .filter((el) =>
      el.name.toLowerCase().includes(search.value.trim().toLowerCase())
    )
    .map((el) => {
      ul.innerHTML += `<div class="card">
        <img src="${el.flag}" alt="" />
        <div class="name">
          <h2>${el.name}</h2>
          <p>${el.capital}</p>
        </div>
      </div>`;
    });
});
