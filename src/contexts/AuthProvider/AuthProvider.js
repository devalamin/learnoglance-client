import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(app);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [theme, setTheme] = useState("light");




    const googleSignInProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const githubLoginProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const userLogOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const authInfo = { user, toggleTheme, theme, googleSignInProvider, githubLoginProvider, createNewUser, LogIn, userLogOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;