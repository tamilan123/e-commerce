import Providers from "./components/contentApi/Providers";
import { Route, Routes } from "react-router-dom";
// import Login from "./page/auth/Login";
import Home from "./page/Home";
import ProductDetails from "./page/ProductDetails";
import { useEffect, useRef } from "react";
import { AuthProvider } from "./components/contentApi/AuthContext";
import { userMe } from "./utils/commonapi";
import { errorToLogin, setLoginRequest, setUserDetails } from "./reducers/auth";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie';
import VerifyEmail from "./page/VerifyEmail";
import Collection from "./page/Collection";

function App() {

  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const onetimeRef = useRef(true)

  useEffect(() => {
    const originalTitle = document.title;
    const messages = ["Don't forget!", "We miss you!", "Come back soon!"];
    let messageIndex = 0;
    let intervalId;

    const changeTitle = () => {
      document.title = messages[messageIndex];
      messageIndex = (messageIndex + 1) % messages.length;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Start changing the title every 1 second (adjust as needed)
        intervalId = setInterval(changeTitle, 1000);
      } else {
        // Revert to the original title and stop the interval
        clearInterval(intervalId);
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(intervalId); // Clean up the interval when component unmounts
    };
  }, []);

  useEffect(() => {
    // Get the token from the cookie
    if (token && onetimeRef.current) {
      const getUserMe = async () => {
      try {
        dispatch(setLoginRequest());
        const response = await userMe();
        if (response) {
          const { data: { data, success, token } } = response;
          const objData = {
            userToken: token,
            userInfo: data,
            success: success
          }
          dispatch(setUserDetails(objData));
        }
      } catch (error) {
        const errorData = {
          error: error
        }
        dispatch(errorToLogin(errorData));
        console.log("🚀 ~ error:", error)
      }
      }
      getUserMe();
      onetimeRef.current = false;
    }
   }, [dispatch,token])

  return (
    <>
      <AuthProvider>
        <Providers>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
        </Providers>
      </AuthProvider>
    </>
  );
}

export default App;
