import React, { useRef, useEffect ,useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const Title = ({title, category}) => {

  const [apiData , setApiData] = useState([]);

const cardsRef = useRef(null);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTI1ZTk3MzU2Njc5OWJmOGNhNjZjNWZhYjg0NGEyMiIsIm5iZiI6MTc1NzQxODAyMC4zODksInN1YiI6IjY4YzAxMjI0Y2QyOWU2NDg3MjA2YTdjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aA14-O-1OLwi-goRkHW7prbFSZBiQrBLUMGXAMQLXOA'
  }
};

const handleScroll = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
};

useEffect(() => {

fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  const cardsElement = cardsRef.current;
  cardsElement.addEventListener('wheel', handleScroll);
}, [category]);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
            return(
                <Link to={`/player/${card.id}`} className="card" key={index} >
                    <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
                    <p>{card.original_title}</p>
                </Link>)})}
      </div>
    </div>
  )
}

export default Title
