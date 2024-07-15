
let favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };
  
  
  function printMovieInfo(movie) {
    let starsString = movie.stars.join(", ");
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${starsString}.`);
  }
  
  
  printMovieInfo(favoriteMovie);