import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {Card, Form, Button} from 'react-bootstrap'

const Login = () => {
    const [show, setShow] = useState('password')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = () =>{
        if(show === 'password'){
            setShow('text')
        }else{
            setShow('password')
        }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(email === ''){
            console.log('Provide email')
        }
        else if(password === ''){
            console.log('Provide password')
        }else{
            const user = {email, password}
            const response = await fetch('http://127.0.0.1:5000/api/v1/user/login', {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(user)
            })

            const result = await response.json()

            if(!response.ok){
                setError(result.error)
                console.log(error)
            }else{
                setEmail('')
                setPassword('')
                console.log('Login successfull')
                navigate('/')
            }
        }
    } 

    return ( 
        <div className="login">
            <Card className="w-75 mx-auto my-5">
                <Card.Body className='pt-5 pb-4 px-4'>
                    <Card.Title className='text-center mb-0 fs-3'>Log in Account</Card.Title>
                    <p className="fs-6 fw-light text-secondary text-center">Welcome back! How have you been?</p>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3 mt-5'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder='juandelacruz@email.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type={show}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Check 
                            type='checkbox' 
                            label='Show password'
                            className='mb-5'
                            onChange={handleChange}
                        />
                        <div className="d-grid">
                            <Button type='submit' className='rounded-4'>Log In</Button>
                        </div>
                    </Form>

                    <small className='fw-light text-center'>No account yet? Sign up</small>
                    <small className='ms-1'>
                        <Link to='/signup'>here</Link>
                    </small>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default Login;