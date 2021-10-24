import {useState, useEffect} from 'react'

import getGhibliData from '../apicalls/getghiblidata'
import Head from 'next/head'
import CallButton from '../components/callbutton'
import CardList from '../components/cardlist'

export default function Home() {
  const [films, setFilms] = useState([])
  const [clicked, setClicked] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    if(clicked){
      getGhibliData().then(resp=>{
        setLoaded(true);
        setFilms(resp);
        setClicked(false);
      });
    }
  },[, clicked])

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Ghibli Movies!</title>
        <link rel="icon" href="https://www.iconninja.com/files/260/257/291/totoro-icon.png" />
      </Head>
      <CallButton name="Get Ghibli Movies!" loaded={loaded} setClicked={(value)=>setClicked(value)}/>
      <CardList films={films} />
    </div>
  )
}
