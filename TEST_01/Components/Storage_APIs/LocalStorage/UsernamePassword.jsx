import { useState, useEffect } from "react";

const UsernamePassword = () => {
    const [username, setUsername] = useState(() => {
        return localStorage.getItem("username") || "";
    });

    const [password, setPassword] = useState(() => {
        return localStorage.getItem("password") || "";
    });

    useEffect(() => {
        localStorage.setItem("username", username);
    }, [username]);

    useEffect(() => {
        localStorage.setItem("password", password);
    }, [password]);

    const remove_user = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        setUsername("");
        setPassword("");
    };

    return (
        <>
            <label>Username</label><br />
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />

            <label>Password</label><br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />

            <div>
                {username && <p>Name : {username}</p>}
            </div>

            <button onClick={remove_user}>Remove</button>
        </>
    );
};

export default UsernamePassword;
