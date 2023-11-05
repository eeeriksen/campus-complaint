import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../AuthContext/authContext'

// eslint-disable-next-line react/prop-types
const Protected = ({ children }) => {
    const { user } = useContext(Context)

    if (!user) {
        return <Navigate to='/signin' replace />
    } else {
        return children
    }
}

export default Protected