import React from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const emailRef = React.useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState("")

async function handleSubmit(e){
  e.preventDefault() 
  try{
    setMessage("")
    setError ('')
    setLoading(true)
    await resetPassword(emailRef.current.value)
    setMessage("Check your inbox for futher instruction")
  } catch(error) {
    console.log(error)
    setError('Failed to reset password')
  }
  setLoading(false)
}

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center, mb-4'>Password Reset</h2>
          {error && <Alert variant='danger'>{error}</Alert>  }
          {message && <Alert variant='danger'>{message}</Alert>  }
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef}  required />
            </Form.Group>
            <Button disabled={loading}  className='w-100' type='submit' >Reset Password</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' >
        <Link to="/login">Login</Link> 
      </div>
    </>
  )
}
