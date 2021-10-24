export default function FilmCard({film}){
    const rotten_tomato = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/757px-Rotten_Tomatoes.svg.png';
    return(
        <div className="h-40 md:h-full bg-purple-100 flex md:flex-col m-4 w-11/12 md:w-96 rounded-xl transform duration-300 md:hover:scale-105">
            <img src={film.image} alt="poster" className="h-40 rounded-l-xl md:hidden"/>
            <img src={film.movie_banner} alt="banner" className="hidden md:block w-auto h-40 overflow-hidden object-cover rounded-t-xl"/>
                <div className="flex flex-col flex-grow md:flex-grow-0 p-3 w-full">
                    <h1 className="text-lg">{film.title} ({film.release_date})</h1>
                    <h2 className="text-xs md:text-md">{film.original_title}</h2>
                    <h2 className="text-gray-500 italic text-xs">Directed by: {film.director}</h2>
                    <div className="flex flex-1 md:flex-none items-center justify-center mt-2 md:mt-4">
                        <img src={rotten_tomato} className="h-8"/> 
                        <span className="text-4xl">&nbsp;{film.rt_score}</span>
                    </div>
            </div>  
            <div className="hidden md:flex p-3">
                <span className="text-sm">{film.description}</span>
            </div>
        </div>
    )
}