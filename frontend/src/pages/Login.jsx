import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            style={styles.input}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.button}>Login</button>

        </form>
      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    height: "100vh",
    paddingLeft: "120px",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "white",
    padding: "80px",
    borderRadius: "30px",
    width: "300px",
    textAlign: "center",
    height: "250px",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
    background: "linear-gradient(135deg, #dee2d8, #e0e3d6)"
  },

  title: {
    marginBottom: "30px"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    borderRadius: "5px",
    border: "1px solid #aef7bf"
  },

  button: {
    width: "108%",
    padding: "11px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignItems: "center"
  }

};

export default Login;