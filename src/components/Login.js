import axios from 'axios'
import { useHistory } from 'react-router-dom'
import React, {useState} from 'react'

const Login = () => {
    const { push } = useHistory()
    const [cred, setCred] = useState({
        username: "",
        password: ""
    })

    const handleChange = (evt) => {
        setCred({
            ...cred,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('http://localhost:9000/api/login', cred)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.payload)
                push('/friends')
            })
            .catch(err => {
                debugger
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>username</label>
                    <input 
                        onChange={handleChange}
                        id='username' 
                        name='username'
                    />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input
                        onChange={handleChange} 
                        type='password' //makes invisable
                        id='password' 
                        name='password'
                    />
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Login