import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './content/UserContext'
import UserContextProvider from './content/UserContextProvider'

function App() {

  return (
   <UserContextProvider>
    <h1>React with Chai and share is important</h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
