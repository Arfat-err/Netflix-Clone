import { useEffect} from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import {Routes , Route , useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async(users) => {
      if (users) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("logged In")
        navigate('/');
        // ...
      } else {
        // User is signed out
        // ...
        console.log("logged Out")
        navigate('/login');
      }
    });
  }, [])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
