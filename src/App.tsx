import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import APIGithub from './routes/Home/APIGithub'
import FindUser from './routes/Home/APIGithub/FindUser'
import UserData from './routes/Home/APIGithub/FindUser/UserData'
import NotFoundRoute from './routes/Home/APIGithub/NotFoundRoute/UserData'

export default function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<APIGithub />} />
          <Route path='find-user' element={<FindUser />}>
            <Route path='user' element={<UserData />} />
            <Route path='*' element={<NotFoundRoute />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
