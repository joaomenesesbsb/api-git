import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import APIGithub from './routes/Home/APIGithub'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<APIGithub/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
