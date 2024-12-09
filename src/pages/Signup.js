import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Card, Form, Button} from 'react-bootstrap'

const Signup = () => {
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
                    <Card.Title className='text-center mb-0 fs-3'>Create Account</Card.Title>
                    <p className="fs-6 fw-light text-secondary text-center">Hi! Are you ready spice up your meal?</p>

                    <Form>
                    <Form.Group className='mb-3 mt-5'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder='Juan Dela Cruz'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder='juandelacruz@email.com'/>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={show} placeholder='Minimum of 8 characters'/>
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