import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import './Google.sass'
require('dotenv').config()
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

export default () => {
    const [ user, setUser ] = useState()
    
    const responseGoogle = (response) => setUser(response)

    const logout = () => setUser()

    return(
        <>
            <h1>Login with Google</h1>
            <div className='google'>
                {!user
                    ? <GoogleLogin
                        className='google__button'
                        clientId={CLIENT_ID}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    : <GoogleLogout
                        className='google__button'
                        clientId={CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    />
                }
            </div>
            {user && <img src={user.profileObj.imageUrl} alt='profileImg' className='google__img'/>}
            {user && <p>Welcome, {user.profileObj.name}</p>}
            {user && <p>Email: {user.profileObj.email}</p>}
            {user && <p className='google__text'>{user.tokenId}</p>}
        </>
    )
}