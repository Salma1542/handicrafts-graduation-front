import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RePassword from './components/RePassword/RePassword';
import OtpPage from './components/OtpPage/OtpPage';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import NewPassword from './components/NewPassword/NewPassword';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shop from './components/Shop/Shop';
import LiveStream from './components/LiveStream/LiveStream';
import Blogdetail from './components/Blogdetails/Blogdetail';
import PostDetails from './components/Home/Postdetails';
import HandicraftRecommendation from './components/Recommendation/recommend';
import HandicraftsHomePage from './components/Home2/home2';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart'; // ✅ غيرت الاسم هنا

// استيراد السياقات الخاصة بـ Token و Cart
import TokenContextProvider from './Context/TokenContext';

import { CartProvider } from './components/Cart/Cart';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "repassword", element: <RePassword /> },
        { path: "otp", element: <OtpPage /> },
        { path: "recoverpassword", element: <RecoverPassword /> },
        { path: "newpassword", element: <NewPassword /> },
        { path: "home", element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "product-details/:id", element: <ProductDetails /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> }, // ✅ استخدم Cart هنا
        { path: "LiveStream", element: <LiveStream /> },
        { path: "Blogdetails", element: <Blogdetail /> },
        { path: "post/:postId", element: <PostDetails /> },
        { path: "recommend", element: <HandicraftRecommendation /> },
        { path: "home2", element: <HandicraftsHomePage /> },
        { path: "profile/:id", element: <Profile /> },
        { path: "*", element: <Navigate to="/login" replace /> },
      ],
    },
  ], { basename: "/graduation-pro-front" });

  return (
    <TokenContextProvider>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </TokenContextProvider>
  
  );
}

export default App;
