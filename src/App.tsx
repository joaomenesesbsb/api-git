import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import APIGithub from './routes/Home/APIGithub'
import FindUser from './routes/Home/APIGithub/FindUserRoute'
import UserData from './routes/Home/APIGithub/FindUserRoute/UserData'
import NotFoundRoute from './routes/Home/APIGithub/NotFoundRoute/UserData'

export default function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<APIGithub />} />
          <Route path='find' element={<FindUser />}>
            <Route path='user/:userName' element={<UserData />} />
            <Route path='user/notfound' element={<NotFoundRoute />}/>
            <Route path='*' element={<NotFoundRoute />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
