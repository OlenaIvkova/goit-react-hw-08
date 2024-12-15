import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { fetchCurrentUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;