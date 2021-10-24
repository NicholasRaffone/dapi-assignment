import FilmCard from './filmcard'

export default function CardList({clicked, films}){
    return(
        films?
        (
            <div className="md:flex md:flex-wrap md:justify-around">
                {
                    films.map(
                        (film)=>{return <FilmCard film={film}/>}
                    )
                }
            </div>
        ):<></>
        
    )
}
