import './App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Donate from './components/Donate';
import Ngo2 from './components/Ngo2';
import Ngo3 from './components/Ngo3';


  function App() {
    const appRouter = createBrowserRouter([
      {
        path: "/",
        children: [
          {
            path: "/",
            element: <><Header /><Main /><Footer/></>,
          },
          {
            path: "/page2",
            element: <><Header /><Ngo2 /><Footer/></>,
          },
          {
            path: "/page3",
            element: <><Header /><Ngo3 /><Footer/></>,
          },
          {
            path: "/about",
            element: <><Header /><About /><Footer/></>,
          },
          {
            path: "/contact",
            element: <><Header /><Contact /><Footer/></>,
          },
          {
            path: "/donate",
            element: <><Header /><Donate /><Footer/></>,
          },
          {
            path: "/blog",
            element: <><Header /><Blog /><Footer/></>,
          },
        ],
        errorElement: <Error />
      },
    ]);

  return (
    <>
    <RouterProvider router={appRouter}>
      <Main />
    </RouterProvider>
    </>
  );
}

export default App;
