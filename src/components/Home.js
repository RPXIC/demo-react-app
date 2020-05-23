import React from 'react'
import './Home.sass';
import { Link } from 'react-router-dom'

export default () => {
    return(
        <>
            <div className='nav'>
                <Link to={'react'}>Starting a react project</Link>

                <Link to={'sass'}>Implementing Sass</Link>

                <Link to={'state'}>First step useState</Link>

                <Link to={'maps'}>Google maps</Link>

                <Link to={'qrcode'}>Generate Qr Code</Link>

                <Link to={'login'}>Login with Google firebase</Link>

                <Link to={'google'}>Login with Google</Link>
                
                <Link to={'facebook'}>Login with Facebook</Link>
            </div>
            <div>
                <Link to={'privacy'}>Privacy Policy</Link>
            </div>
        </>
    )
}
