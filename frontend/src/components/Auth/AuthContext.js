import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const res = await fetch('http://127.0.0.1:8000/main/api/login/', {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({username, password})});

            localStorage.setItem("access_token", res.data.access);
            localStorage.setItem("refresh_token", res.data.refresh);
            setUser(username);
            alert("Login successful!");
            console.log(`Login response: ${res}`);
        } catch(error) {
            console.error(`Login failed with: ${error}`);
        }
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}