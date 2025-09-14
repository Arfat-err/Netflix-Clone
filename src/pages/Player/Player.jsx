import React, { useState, useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
 const [apiData , setApiData] = useState({name : "", key :"", type : "", published_at : ""});
 const {id} = useParams();
 const navigate = useNavigate()

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTI1ZTk3MzU2Njc5OWJmOGNhNjZjNWZhYjg0NGEyMiIsIm5iZiI6MTc1NzQxODAyMC4zODksInN1YiI6IjY4YzAxMjI0Y2QyOWU2NDg3MjA2YTdjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aA14-O-1OLwi-goRkHW7prbFSZBiQrBLUMGXAMQLXOA'
  }
};


useEffect(()=>{

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

},[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back" onClick={()=>{navigate(-2)}} />
  <iframe 
    width="90%" 
    height="90%" 
    src={`https://www.youtube.com/embed/${apiData.key}`}
    title="trailer" 
    frameBorder='0'
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  ></iframe>
      <div className='player_info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
