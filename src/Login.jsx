import React from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




export default function Login() {
  const navigate = useNavigate()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const { login } = useAuth()
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

async function handleSubmit(e){
  e.preventDefault() 

  try{
    setError ('')
    setLoading(true)
    await login(emailRef.current.value, passwordRef.current.value)
    navigate('/')
  } catch(error) {
    console.log(error)
    setError('Failed to login')
  }
  setLoading(false)
  
}

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center, mb-4'>Log In</h2>
          {error && <Alert variant='danger'>{error}</Alert>  }
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef}  required />
            </Form.Group>
            <Form.Group className='mb-3' id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef}  required />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit' >Login</Button>
          </Form>
          <div className='w-100 text-center mt-3' >
             <Link to="/forgotPassword" >Forgot Password?</Link>  
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' >
        Don't have an account? <Link to="/signup">Sign up</Link> 
      </div>
    </>
  )
}
