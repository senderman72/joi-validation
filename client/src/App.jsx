import { useEffect, useState } from "react";
import "./App.css";
import "./form.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const handleFormSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const response = await fetch(
      `http://localhost:3000/login?email=${email}&password=${password}`
    );
    const responseData = await response.json();
    console.log(responseData);
    setData(responseData);
  };

  useEffect(() => {
    handleFormSubmit();
  }, []);

  return (
    <div className="App container">
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
      {data && <h1>{data}</h1>}
    </div>
  );
}

export default App;
