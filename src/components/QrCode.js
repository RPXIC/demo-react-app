import React, {useState} from 'react'
import { useQrEncode, useQrDecode } from 'react-qr-hooks'

export default () => {
    const [data, setData] = useState()
    const encoded = useQrEncode(data)
    const decoded = useQrDecode(encoded)  

    return(
        <div>
            <h3>Create a Qr code:</h3>

            <code>npm install react-qr-hooks</code> <br></br><br></br>

            <form onSubmit={(e) => {
                e.preventDefault()
                setData(e.target.qr.value)
            }}>
                <input type='text' name='qr' placeholder='text to encode to QR'/>
                <button type='submit'>Encode</button>
            </form>

            {encoded && <img src={encoded} alt='My QR code' />}
            {decoded && <p>{decoded}</p>}
        </div>
    )
}
