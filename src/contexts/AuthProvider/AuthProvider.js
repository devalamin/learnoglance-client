import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(app);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true)




    const googleSignInProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const githubLoginProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const userLogOut = () => {
        setLoading(true)
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const authInfo = { user, loading, toggleTheme, theme, googleSignInProvider, githubLoginProvider, createNewUser, LogIn, userLogOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;