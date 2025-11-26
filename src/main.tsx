
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.js'
import StoryView from './StoryView.jsx'
const router = createBrowserRouter(
  [
  {
    path:'/',
    element:<App/>
  },
  {
   path:'/story/:id',
  element:<StoryView/>
  }
]);

createRoot(document.getElementById('root')!).render(
    //  <App/>
    <RouterProvider router={router}/>
  
)
