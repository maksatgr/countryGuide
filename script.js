const searchBtn = document.getElementById("search__button");
const inputCountry = document.getElementById("country__input");

searchBtn.addEventListener("click", () => {
  let countryName = inputCountry.value;

  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalURL)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].capital[0]);
      console.log(data[0].population);

      resultant.innerHTML = `

      <img src="${data[0].flags.svg}" class="flag-img">

      <h2>${data[0].name.common}</h2>
      
      <h3>Capital:${data[0].capital[0]}<h3>
      <h3>Population: ${data[0].population}<h3>
      `;
    });
});
