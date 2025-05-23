import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ChatRoom from './pages/ChatRoom'
import StreamerApplicationPage from './pages/StreamerApplicationPage'
import './index.css';



function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' element= {<HomePage/>}/>
      <Route path='/login' element= {<LoginPage/>}/>
      <Route path='/signup' element= {<SignupPage/>}/>
      <Route path='/chat' element= {<ChatRoom/>}/>
      <Route path='/apply' element= {<StreamerApplicationPage/>}/>
      </Routes>
    </Layout>
  )
}

export default App