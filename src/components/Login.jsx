import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
            email: null,
            password: null,
            confirmPassword: null,
            errors: {
                email: '',
                password: '',
                confirmPassword: ''
              }
            
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // handleSubmit =  (event) => {
    //     console.log('submitted');
    //     event.preventDefault();

    //     this.setState({
    //         [event.target.name] : event.target.value
    //     })
    // }
        handleSubmit = (event) => {
            event.preventDefault();
            if(validateForm(this.state.errors)) {
              console.info('Valid Form')
            }else{
              console.error('Invalid Form')
            }
            const validateForm = (errors) => {
                let valid = true;
                Object.values(errors).forEach(
                  // if we have an error string set valid to false
                  (val) => val.length > 0 && (valid = false)
                );
                return valid;
              }
          }
      
     
    
    handleChange = (event) => {
    event.preventDefault();

           const { name, value } = event.target
           let errors = this.state.errors;

           switch (email) {
          
            case 'email': 
              errors.email = 
                validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
              break;
            case 'password': 
              errors.password = 
                value.length < 8
                  ? 'Password must be 8 characters long!'
                  : '';
              break;
            default:
              break;
          }
  
          const validEmailRegex = 
          RegExp('/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i');
          this.setState({errors, [name]: value}, ()=> {
              console.log(errors)
          })
        
    }
    // componentDidMount() {
    //     const email = localStorage.getItem('email') === 'true';
    //     const password = localStorage.getItem('password') === 'true';
    //     const password_confirmation = localStorage.getItem('password_confirmation') === 'true';
       
    //     this.setState({ email, password, password_confirmation });
    //   }
    render(){
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
                    required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
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
                </Form.Group>
                
               
             
               
                <div className="panel panel-default">
                   {/* <FormErrors formErrors={this.state.formErrors} /> */}
                </div>
               
                <Button variant="primary" type="submit"  disabled={!this.state.isFiled}>
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