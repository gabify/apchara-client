import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Form, Button} from 'react-bootstrap'

const Login = () => {
    const [show, setShow] = useState('password')

    const handleChange = () =>{
        if(show === 'password'){
            setShow('text')
        }else{
            setShow('password')
        }
    }

    return ( 
        <div className="login">
            <Card className="w-75 mx-auto my-5">
                <Card.Body className='pt-5 pb-4 px-4'>
                    <Card.Title className='text-center mb-0 fs-3'>Log in Account</Card.Title>
                    <p className="fs-6 fw-light text-secondary text-center">Welcome back! How have you been?</p>

                    <Form>
                        <Form.Group className='mb-3 mt-5'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder='juandelacruz@email.com'/>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={show}/>
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