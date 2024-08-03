import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = ({ isLoggedIn, onLogout }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <a href="/" style={styles.brand}>RecipeHub</a>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/B" style={styles.navLink}>Add Recipes</Link></li>
              <li><a href="/" onClick={onLogout} style={styles.navLink}>Logout</a></li>
            </>
          ) : (
            <li><Link to="/C" style={styles.navLink}>Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'transparent',
    padding: '1rem 2rem',
    boxShadow: 'none',
    zIndex: 1000,
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: '1rem',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

export default Navbar2;
