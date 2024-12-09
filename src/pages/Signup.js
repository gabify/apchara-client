import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Form, Button} from 'react-bootstrap'

const Signup = () => {
    const [show, setShow] = useState('password')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleChange = () =>{
        if(show === 'password'){
            setShow('text')
        }else{
            setShow('password')
        }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()

        //check if fields are not empty
        if(name === ''){
            console.log('Provide name')
        }

        else if(name === ''){
            console.log('Provide email')
        }

        else if(password === ''){
            console.log('Provide password')
        }else{

            const data = {email, password, name}
            const response = await fetch('http://127.0.0.1:5000/api/v1/user/signup', {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if(!response.ok){
                setError(result.error)
                console.log(error)
            }else{
                setEmail('')
                setName('')
                setPassword('')
                console.log('Sign up successfull')
                //add alert that the sign up is complete
            }
        }
    }

    return ( 
        <div className="login">
            <Card className="w-75 mx-auto my-5">
                <Card.Body className='pt-5 pb-4 px-4'>
                    <Card.Title className='text-center mb-0 fs-3'>Create Account</Card.Title>
                    <p className="fs-6 fw-light text-secondary text-center">Hi! Are you ready spice up your meal?</p>

                    <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3 mt-5'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder='Juan Dela Cruz'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
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
                                placeholder='Minimum of 8 characters'
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
                            <Button type='submit' className='rounded-4'>Sign up</Button>
                        </div>
                    </Form>

                    <small className='fw-light text-center'>Do you have an account already? Log in</small>
                    <small className='ms-1'>
                        <Link to='/login'>here</Link>
                    </small>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default Signup;