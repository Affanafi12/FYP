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
