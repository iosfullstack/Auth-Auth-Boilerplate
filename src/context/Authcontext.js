import React from "react";
import { auth } from "../library/firebase";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, 
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
// import { app } from "../library/firebase";

const AuthContext = React.createContext();

export function useAuth() { 
  return React.useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    const signup = (userId, email, password) => {
      return createUserWithEmailAndPassword(auth, userId, email, password)
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        return signOut(auth)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setIsLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authContext = {
        currentUser,
        signup,
        signin,
        signout,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authContext}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}




