// import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import PropTypes from 'prop-types';


const Layout = ({children}) => {
  return (
    <>
      <AppBar />
      <main>
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;