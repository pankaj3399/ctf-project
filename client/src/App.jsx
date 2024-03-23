import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import useAuthCheck from './hooks/useAuthCheck';
import Library from './Components/Library/Library';
import Chat from './Components/Chat/Chat/Chat';
import MyPrompts from './Components/MyPrompts/MyPrompts/MyPrompts';
import CreatePrompts from './Components/Create/CreatePrompts/CreatePrompts';
import CreateCharacter from './Components/Create/CreateCharacter/CreateCharacter';
import Login from './Layout/Login';
import Home from './Layout/Home';
import RequireAuth from './Components/RequiredAuth/RequireAuth';
import LandingPage from './Components/LandingPage/LandingPage';
import Main from './Layout/Main';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';

function App() {

  // authentication checking
  // const authChecked = useAuthCheck();
  // if (!authChecked) return <div className='text-center'>Checking authentication....</div>

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<Main />}>
        <Route path="/" element={<LandingPage />} />

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        {/* <Route path="library" element={<RequireAuth><Library /></RequireAuth>} />
        <Route path="chat" element={<RequireAuth><Chat /></RequireAuth>} />
        <Route path="myprompts" element={<RequireAuth><MyPrompts /></RequireAuth>} />
        <Route path="createPrompts" element={<RequireAuth><CreatePrompts /></RequireAuth>} />
        <Route path="createCharacter" element={<RequireAuth><CreateCharacter /></RequireAuth>} /> */}

      </Route>
    </Routes>
  )
}

export default App
