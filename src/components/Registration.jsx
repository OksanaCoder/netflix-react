import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '', 
            surname: '',
            email: '',
            password: '',
            password_confirnation: '',
            registrationErrors: '',
            isValid: true
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit =  (event) => {
        console.log('submitted');
        event.preventDefault();
    //       const { email, password, password_confirmation } = this.state;
    //       localStorage.setItem('email', email);
    //       localStorage.setItem('password', password);
    //       localStorage.setItem('password_confirnation', password_confirmation);
    // 
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
                 <Form  onSubmit={this.handleSubmit}>
                 <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                     type='text' 
                     name='name' 
                     placeholder='Name' 
                     value={this.state.name} 
                     onChange={this.handleChange} 
                      />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control 
                     type='text' 
                     name='surname' 
                     placeholder='Surname' 
                     value={this.state.surname} 
                     onChange={this.handleChange} 
                      />
                </Form.Group>
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
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control 
                     type='date' 
                     name='date' 
                     placeholder='Date' 
                     value={this.state.date} 
                     onChange={this.handleChange} 
                     required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control 
                     type='text' 
                     name='address' 
                     placeholder='Address' 
                     value={this.state.address} 
                     onChange={this.handleChange} 
                     required />
                </Form.Group>

                
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
              
                    
           
            </div>
        )
    }
}



export default Registration;