const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const countryInput = document.getElementById("country");
const ratingInput = document.getElementById("rating");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  event.preventDefault();
  const name = nameInput.value;
  const year = yearInput.value;
  const country = countryInput.value;
  const rating = ratingInput.value;

  if (name === '' || year === '' || country === '' || rating === '') {
      alert('заполните все значения')
  } else {
    const film = {
        name: name,
        year: +year,
        country: country,
        rating: +rating
      };
    
      movies.push(film);
      console.log(film);
      console.log(movies);
  }

});

const movies = [
  { name: "Зеленая миля", country: "USA", year: "1999", rating: "9,1" }
];

