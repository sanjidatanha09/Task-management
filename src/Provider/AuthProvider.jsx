import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from 'axios';


const auth = getAuth(app);

export const AuthContext = createContext(null);


//for google login 
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //google login
    const googleSignIn = (value) => {
        return signInWithPopup(auth, googleProvider);
    }

    //regi login
    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName, photoURL)
    }

    //user login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout button
    const logOUt = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
            //if user exists then issue a token
            if (currentUser) {

                axios.post('https://assignment-11-server-smoky-mu.vercel.app/jwt', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('token res', res.data);
                    })

            }

            else if (!currentUser) {
                axios.post('https://assignment-11-server-smoky-mu.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })

            }
        });
        return () => {
            unSubscribe();
        }

    }, [])




    const userInfo = {
        googleSignIn,
        user,
        loading,
        createUser,
        logOUt,
        signIn,

    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;