import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Erro from './routes/Erro'
import Home from './routes/Home'
import Produtos from './routes/Produtos'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Erro/>,


    children: [
      {path: '/', element: <Home/>},
      {path: '/Produtos', element: <Produtos/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
