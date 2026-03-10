import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div style={styles.nav}>

      <h3 style={styles.logo}>Project Manager</h3>

      <div>
        <Link style={styles.link} to="/">Login</Link>
        <Link style={styles.link} to="/register">Register</Link>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
      </div>

    </div>
  );
}

const styles = {

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#1f2937",
    color: "white"
  },

  logo: {
    margin: 0
  },

  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none"
  }

};

export default Navbar;