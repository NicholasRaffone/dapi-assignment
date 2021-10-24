const getGhibliData = () =>{
    const req = fetch('https://ghibliapi.herokuapp.com/films/').then(resp=>resp.json());
    return req;
}

export default getGhibliData;
