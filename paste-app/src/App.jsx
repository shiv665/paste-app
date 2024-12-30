
import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>

        <Navbar />
        <Home />

      </div>
    },
    {
      path: '/home/:id',
      element: <div>

        <Navbar />
        <Home />

      </div>
    },
    {
      path: '/paste',
      element: <div>

        <Navbar />
        <Paste />

      </div>
    },
    {
      path: '/paste/:id',
      element: <div>

        <Navbar />
        <ViewPaste />

      </div>
    },
    {
      path: '*',
      element: <div>
        <h1>404: Page not found</h1>
        </div>
    }

  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
