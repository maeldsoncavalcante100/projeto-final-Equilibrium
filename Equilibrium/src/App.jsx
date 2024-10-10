import Home from './Pages/Home/index'
import Header from './components/header/index'
import './App.css'

function App() {
  const user = 'Thiago '
  return (
    <>
      <Header />
      <Home user={user} />
    </>
  )
}

export default App
