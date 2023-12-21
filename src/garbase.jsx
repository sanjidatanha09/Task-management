import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosSecure from '../Hooks/useAxiosSecure';




export const AuthContext = createContext(null);




const AuthProvider = ({ children }) => {
    const axiosSecure = useAxiosSecure

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //for google login 
    const googleProvider = new GoogleAuthProvider()


    //google login
    const googleSignIn = (value) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //regi login
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    //logout button
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false);


            // if (currentUser) {
            //     //get token and store client
            //     const userInfo = { email: currentUser.email };
            //     axiosSecure.post('/jwt', userInfo)
            //         .then(res => {
            //             if (res.data.token) {
            //                 localStorage.setItem('access-token', res.data.token);
            //                 setLoading(false);
            //             }
            //         })

            // }
            // else {
            //     localStorage.removeItem('access-token');
            //     setLoading(false);

            // }

        });

        return () => {
            return unsubscribe();
        }

    }, [axiosSecure])





    const userInfo = {
        googleSignIn,
        user,
        loading,
        createUser,
        logOut,
        signIn,
        updateUserProfile


    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;