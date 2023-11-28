import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    // Creating User
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // logging 
    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logging Out The User

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }

    // Observing User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setloading(false);
        })
        return () => {
            return unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;