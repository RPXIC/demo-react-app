import React, { useState, useEffect } from 'react'
import './Facebook.sass'
import * as storage from '../utils/storage'

export default () => {
    const [ user, setUser ] = useState()

    useEffect(() => {
        const user = storage.getUser()
        if (user) setUser(user)
    }, [])

    const facebookLogin = () => {
        if (!window.FB) return

        window.FB.getLoginStatus(response => {
            if (response.status === 'connected') {
                facebookLoginHandler(response)
            } else {
                window.FB.login(facebookLoginHandler, { scope: 'public_profile, email' })
            }
        })
    }
    
    const facebookLoginHandler = (response) => {
        if (response.status === 'connected') {
            window.FB.api('/me?fields=id,name,email,picture', userData => {
                storage.setUser({...userData, token: response.authResponse.accessToken})
                setUser({...userData, token: response.authResponse.accessToken})
            })
        }
    }

    const facebookLogout = () => {
        window.FB.getLoginStatus(response => {
            if (response.status === 'connected') {
                window.FB.logout(() => {
                    storage.clear()
                    setUser(null)
                })
            }
        })
    }

    return(
        <>
            <h1>Login with Facebook</h1>
            <div className='facebook__container'>
                {!user 
                    ? <button onClick={facebookLogin} className='facebook__button'>Facebook Login</button>
                    : <button onClick={facebookLogout} className='facebook__button'>Facebook Logout</button>
                }
            </div>
            {user && 
                <>
                    <img src={user.picture.data.url} alt='profilePicture'></img>
                    <p>ID: {user.id}</p>
                    <p>Hello, {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p className='facebook__text'>token: {user.token}</p>
                </>
            }
        </>
    )
}