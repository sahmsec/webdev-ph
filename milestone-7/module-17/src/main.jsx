import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users/Users2.jsx'
import UserDetails from './components/User/UserDetails.jsx'
// import PostDetails from './components/Posts/PostDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import Post from './components/Posts/Post.jsx'
import PostDetails from './components/Posts/PostDetails.jsx'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([

  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobile },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 usersPromise={usersPromise} />
        </Suspense>
      },

      {
        path: 'users/:userid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component: UserDetails

      },

      {
        path: "posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },

      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
,
        Component: PostDetails
      }
    ]
  },

  {
    path: 'about',
    element: <div>About me here</div>
  },

  {
    path: 'app',
    Component: App
  },
  {
    path: 'apps',
    element: <App />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
