import React, { Component } from 'react';
import { Form, Button, Table, Modal, Navbar, Nav, NavDropdown, FormControl, Pagination } from 'react-bootstrap'


class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      projects: [],
      show: false,
      Mshow: false,
      show1: false,

      product: {
        name: '',
        imageurl: '',
        price: '',
        category: '',
        rate: '',
        comment: '',

        submitted: false,
      }
    }

  }

  componentDidMount = async () => {
    const resp = await fetch('http://localhost:3457/products')
    const result = await resp.json()
    //console.log(result)
    this.setState({
      data: result
    })
    console.log("props from products", this.props.match)
  }

  onChangeProduct = event => {
    console.log(event.target.name, event.target.value)
    this.setState({
      ...this.state,
      product: {
        ...this.state.product,
        [event.target.name]: event.target.value
      }

    })
  }

  onChange = (event) => {
    console.log(event.target.name, event.target.value)
    this.setState({
      product: {
        ...this.state.product,
        [event.target.name]: event.target.value
      }

    })
  }

  saveStudeent = async (event) => {
    event.preventDefault()
    this.setState({ submitted: true })
    const data = {
      name: this.state.product.name,
      imageurl: this.state.product.imageurl,
      price: this.state.product.price,
      category: this.state.product.category,
      comment: this.state.product.comment,
      rate: this.state.product.rate

    }
    const resp = await fetch('http://localhost:3457/products', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (resp.ok) {
      alert('New product added')
    }
    //console.log(resp)
  }
  delItem = async (id) => {
    // event.preventDefault()

    const resp = await fetch('http://localhost:3457/products/' + id, {
      method: 'DELETE',

    })
    if (resp.ok) {
      alert("deleted")
    }
  }
  handleClose() {
    this.setState({ show: false, show1: false })
  }
  openAndEdit = async (id) => {

    const product = this.state.data.find(product => product._id === id)
    this.setState({
      show: true,
      product: product
      // data : result
    })
  }



  editItem = async (id) => {
    const udatedData = {
      _id: id,
      name: this.state.product.name,
      imageurl: this.state.product.imageurl,
      price: this.state.product.price,
      category: this.state.product.category,

    }
    // this.setState({  data: udatedData  })
    // event.preventDefault()
    const resp = await fetch('http://localhost:3457/products/' + id, {
      method: 'PUT',
      body: JSON.stringify(udatedData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //find the element into this.state.data
    const oldproduct = this.state.data.find(x => x._id === id)
    const index = this.state.data.indexOf(oldproduct)
    const products = this.state.data
    products[index] = udatedData
    //replace it and update the state
    this.setState({
      data: products,
      show: false
    })
  }

  openProject = async (id) => {
    const resp = await fetch('http://localhost:3457/products/' + id)
    const result = await resp.json()
    //console.log(result)
    this.setState({
      projects: result,
      show1: true
    })
    console.log(result)

  }

  render() {
    console.log(this.state.products)
    // console.log("props from product", this.props)
    return (
      <>
       
        

       <div className='container'>

          <Table striped bordered hover className='mt-4' style={{background: '#fff'}}>

            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Img</th>
              <th>Price</th>
              <th>Category</th>


            </tr>




            {this.state.data.map((item, i) => {


              return (
                <>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td><img style={{width: '100px'}} src={item.imageurl}></img></td>
                    <td>$ {item.price}</td>
                    <td>{item.category}</td>

                    <td><Button variant='danger' onClick={() => this.delItem(item._id)}>Remove</Button></td>
                    <td><Button variant='success' onClick={() => this.openAndEdit(item._id)}>Edit</Button></td>
                    <td><Button variant='dark' onClick={() => this.openProject(item._id)}>Reviews</Button></td>
                  </tr>
                  <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form className='mt-4 formSub' onSubmit={this.saveStudeent}>
                        <Form.Group>
                          <Form.Label>Name</Form.Label>
                          <Form.Control name='name' onChange={this.onChangeProduct} value={this.state.product.name} type="text" placeholder="Enter name" />
                        </Form.Group>

                        {/* <Form.Group>
                          <Form.Label>Image</Form.Label>
                          <img name='imageurl' onChange={this.onChangeProduct} value={this.state.product.imageurl} type="image" placeholder="Enter surname" />
                        </Form.Group> */}

                        <Form.Group>
                          <Form.Label>Price</Form.Label>
                          <Form.Control name='price' onChange={this.onChangeProduct} value={this.state.product.price} type="text" placeholder="Enter price" />
                         
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Category</Form.Label>

                          <Form.Control name='category' onChange={this.onChangeProduct} value={this.state.product.category} type="text" />
                        </Form.Group>




                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => this.handleClose()}>
                        Close
          </Button>
                      <Button variant="primary" onClick={() => this.editItem(item._id)}>
                        Save Changes
          </Button>
                    </Modal.Footer>
                  </Modal>
                  <Modal show={this.state.show1} onHide={() => this.handleClose()}>
              <Modal.Header closeButton>
                <Modal.Title>Comments</Modal.Title>
              </Modal.Header>


              <Modal.Body>
                <ul style={{color: '#000', listStyle: 'none'}}>
                  <li>{this.state.product.comment}</li>
                  <li>{this.state.product.rate}</li>
                </ul>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.handleClose()}>
                  Close
              </Button>

              </Modal.Footer>
            </Modal>
                </>

              )
            }
            )
            }

           
           

          </Table>
          <Pagination style={{display: 'flex', justifyContent: 'center'}}>
            <Pagination.First />     
            <Pagination.Item className='pag-items' active>{1}</Pagination.Item>
            <Pagination.Item className='pag-items'>{2}</Pagination.Item>
            <Pagination.Item className='pag-items'>{3}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </div>

      </>
    );
  }

}

export default Comments;
