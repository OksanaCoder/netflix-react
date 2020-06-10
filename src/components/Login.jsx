import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password_confirnation: '',
            registrationErrors: ''
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit =  (event) => {
        console.log('submitted');
        event.preventDefault();
          const { email, password, password_confirmation } = this.state;
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('password_confirnation', password_confirmation);
    }

    handleChange(event) {
       this.setState({
           [event.target.name] : event.target.value
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
            <div className='container'>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                <form onSubmit={this.handleSubmit}>
                
                    <input 
                     type='email' 
                     name='email' 
                     placeholder='Email' 
                     value={this.state.email} 
                     onChange={this.handleChange} 
                     required
                     />

                     <input 
                     type='password' 
                     name='password' 
                     placeholder='Password' 
                     value={this.state.password} 
                     onChange={this.handleChange} 
                     required
                     />

                    <input 
                     type='password' 
                     name='password_confirmation' 
                     placeholder='Password_confirmation' 
                     value={this.state.password_confirmation} 
                     onChange={this.password_confirmation} 
                     required
                     />
                     <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}



export default Login;