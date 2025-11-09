import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import './index.css'
import About_Team from './Components/About_Team.jsx'
import Portfolio from './Components/Portfolio.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Services from './Components/Services.jsx'
import FilmProduction from './Components/FilmProduction.jsx'
import Branding from './Components/Branding.jsx'
import ArtCuration from './Components/ArtCuration.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: 'about_team',
        element: <About_Team />
      }
      ,
      {
        path: 'portfolio',
        element: <Portfolio />
      }, {
        path: 'about_us',
        element: <AboutUs />
      }, {
        path: 'services',
        element: <Services />
      }, {
        path: 'FilmProduction',
        element: <FilmProduction />
      },
      {
        path: 'Branding',
        element: <Branding />
      },
      {
        path: 'ArtCuration',
        element: <ArtCuration />
      },
      {
        path: 'Contact',
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
