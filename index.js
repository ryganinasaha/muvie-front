let movies = {
  nameMovies: [
    {
      name: "name",
      country: "country",
      year: "year",
      rating: "rating"
    },

    {
      name: "Зеленая миля",
      country: "USA",
      year: 1999,
      rating: 9.1
    },

    {
      name: "Список Шиндлера",
      country: "USA",
      year: 1993,
      rating: 9
    },

    {
      name: "Побег из Шоушенка",
      country: "USA",
      year: 1994,
      rating: 9
    },

    {
      name: "Властелин колец: Возвращение короля",
      country: "USA",
      year: 2003,
      rating: 9
    },

    {
      name: "Форрест Гамп",
      country: "USA",
      year: 1994,
      rating: 8.9
    },

    {
      name: "Властелин колец: Две крепости",
      country: "USA",
      year: 2002,
      rating: 8.8
    },

    {
      name: "Властелин колец: Братство кольца",
      country: "USA",
      year: 2001,
      rating: 8.8
    },

    {
      name: "1+1",
      country: "France",
      year: 2011,
      rating: 8.8
    },

    {
      name: "Криминальное чтиво",
      country: "USA",
      year: 1994,
      rating: 8.7
    },

    {
      name: "Иван Васильевич меняет профессию",
      country: "USSR",
      year: 1973,
      rating: 8.7
    },

    {
      name: "Отступники",
      country: "USA",
      year: 2006,
      rating: 9.5
    },

    {
      name: "Матрица",
      country: "USA",
      year: 1999,
      rating: 8.5
    },

    {
      name: "Человек паук",
      country: "USA",
      year: 2002,
      rating: 8.1
    }
  ]
};

// вывод всех элементов из country.cities
document.write();
for (let i = 0; i < movies.nameMovies.length; i++)
  document.write(
    movies.nameMovies[i].name +
      movies.nameMovies[i].country +
      movies.nameMovies[i].year +
      movies.nameMovies[i].rating +
      "<br/>"
  );