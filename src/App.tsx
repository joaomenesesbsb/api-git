import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import APIGithub from './routes/Home/APIGithub'
import FindUser from './routes/Home/FindUser'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<APIGithub/>}/>
          <Route path='find-user' element={<FindUser/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
