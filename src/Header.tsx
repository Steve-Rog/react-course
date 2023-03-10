import { useState, useEffect } from "react";

function Home() {
  const [email, emailState] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("typed");
  }, [email]);

  return (
    <div>
      <input
        type="text"
        placeholder="text name"
        onChange={(evt) => emailState(evt.target.value)}
      />
      <p>{email}</p>
    </div>
  );
}

export default Home;
