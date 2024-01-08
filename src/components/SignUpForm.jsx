import { useState } from "react";
const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
           {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
           }
        );
           const result = response.json(result);
           setToken(result.token);
        } catch (error) {
            setError(error.message);
        }
      }

    return (
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}> 
        <label>
            Username: 
        </label>
        <input type = "text" value = {username} onChange={(e) => setUsername(e.target.value)} formMethod="POST"/>
       
        <label>
            Password: 
        </label>
        <input type = "password" value = {password} onChange={(e) => setPassword(e.target.value)} formMethod="POST"/>
        <button>Submit</button>
    </form>
        </>
    );
};

export default SignUpForm