import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { posts } from '../database/posts.js'

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export function AuthContext({ children }) {
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsubscribe
        unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false)
            if (user) {
                setUser(user)
            } else {
                setUser(false)
            }
        });
        return () => {
            if (unsubscribe) {
                unsubscribe()
            }
        }
    }, [auth]);

    const values = {
        user: user,
        setUser: setUser,
        posts: posts
    }

    return <Context.Provider value={values}>
        {!loading && children}
    </Context.Provider>;
}