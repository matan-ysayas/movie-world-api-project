async function getData(id) {
    try {
        return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`).then((response) => response.json());
    
    } catch (error) {
      return error;
    }
  }
  let movieId = location.search.substr(4);
  getData(movieId).then((movie) => {
    cardAllDetailsDiv.innerHTML = `
      <h1><b>${movie.data.movieName} </b></h1>
      <h3><span>Creation date:</span>${movie.data.date}</h3>
      <h3><span>Rating:</span>${movie.data.rating}</h3>
      <img id="image" src="${movie.data.image}">
      <h3><span>Description:</span>${movie.data.synopsis}</h3>
     `;
  });

  