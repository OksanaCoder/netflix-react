import React, {Component} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
            email: '',
            password: '',
            confirmPassword: '',
            errors : {
                email: '',
                password: '', 
                confirmPassword: ''
            },
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            formValid: false
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange (event){
        console.log('email changed', this);
      this.setState({
         [event.target.name]: event.target.value,
      },
      
      )
     }

        handleSubmit(event) {
           event.preventDefault();
    
            console.log('form is submitted');

          

                this.setState({
                    emailError: 'Invalid error',
                })
            }
              
      
     
    
    
    render() {
        return ( 
            <div className='container text-white'>
                <h5 className='mb-4 mt-5'>Registration form</h5>
                 <Form  onSubmit={this.handleSubmit}>
            
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type='email' 
                    name='email' 
                    placeholder='Email' 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required 
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    <div style={{color: 'red', fontSize: '10px'}}>{this.state.errors.email}</div>
                   {this.state.errors.email && 
                        <Alert variant='danger'>
                            Please, fill the field!
                        </Alert>
                    }
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                     type='password' 
                     name='password' 
                     placeholder='Password' 
                     value={this.state.password} 
                     onChange={this.handleChange} 
                     required />    
                 <div style={{color: 'red', fontSize: '10px'}}>{this.state.errors.password}</div>
                 {this.state.errors.email && 
                        <Alert variant='danger'>
                            The password has to be no less than 6 ..
                        </Alert>
                    }
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control 
                     type='password' 
                     name='confirmPassword' 
                     placeholder='Confirm password' 
                     value={this.state.confirmPassword} 
                     onChange={this.handleChange} 
                     required />
                    <div style={{color: 'red', fontSize: '10px'}}>{this.state.errors.confirmPassword}</div>
                    {this.state.errors.email && 
                        <Alert variant='danger'>
                            The password does not match!
                        </Alert>
                    }
                </Form.Group>
                
               
             
             
                <Button variant="primary" type="submit">
                    Submit
                </Button>

             {/* { !this.state.isFiled && 
                <Button variant="primary" type="submit"  disabled>
                    Submit
                </Button>
                
             } */}
                </Form>
              
                    
           
            </div>
        )
    }
}



export default Login;