import { Navigate } from 'react-router-dom'
import { UserAuth } from './Context/AuthContext'

export function Protected({ children }) {
    const { user } = UserAuth()
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    else {
        return children
    }
}


export default Protected