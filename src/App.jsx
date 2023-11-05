import './App.css'
import Header from './components/Header.jsx'
import Home from './routes/home'
import SignIn from './routes/SignIn.jsx'
import SignUp from './routes/SignUp.jsx'
import Protected from './routes/Protected.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './AuthContext/authContext.jsx'
import { MakeComplaint } from './routes/MakeComplaint'

function App() {
    const router = createBrowserRouter([
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/', element: <Protected><Home /></Protected> },
        { path: '/make-complaint', element: <Protected><MakeComplaint /></Protected> },

    ])

    return (
        <>
            <Header />
            <AuthContext>
                <RouterProvider router={router}></RouterProvider>
            </AuthContext>
        </>
    )
}

export default App
