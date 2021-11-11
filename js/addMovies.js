
async function getApi(api,ojb){
    try{
       return await fetch(api,ojb) 
       .then(res=>res.json())
       
    }
    catch(error){
        return error
    }
   
};


class Movie{
    movieName;
    image;
    synopsis;
    linkToMovie;
    rating;
    constructor(movieName,image,synopsis,linkToMovie,rating){
        this.movieName=movieName;
        this.image=image;
        this.synopsis=synopsis;
        this.linkToMovie=linkToMovie;
        this.rating=rating;
    }
}


addMovie.onclick=()=>{
    let movie=new Movie(movieNameInput.value,imgInput.value,synopsisInput.value,linkToMovieInput.value,Number(ratingInput.value))
        let options={
            method:`post`,
            body:JSON.stringify({movie}),
            headers:{'Content-Type': 'application/json'}

        }
        getApi("https://moviesmern.herokuapp.com/movies/saveMovie",options).then(res=>{console.log(res);})




        
}