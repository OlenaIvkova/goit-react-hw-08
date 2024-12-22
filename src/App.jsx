import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from "react";
import "../src/App.css";
import "modern-normalize";
import Layout from "./components/Layout.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import PrivateRoute from "./components/PrivateRoute.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import { refreshUser } from "./redux/auth/operations.js";
// import RegisterForm from './components/RegistrationForm/RegistrationForm.jsx';
// import LoginForm from './components/LoginForm/LoginForm.jsx';


const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const RegistrationPage = lazy(() =>
  import("./pages/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <Layout>
        <Routes> 
        {/* <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              element={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
          }
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;