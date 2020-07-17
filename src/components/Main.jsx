import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import RowOfItems from "./RowOfItems";

class Main extends Component {
    
     state = {
        genre : null,
        sport: [],
        beauty: [],
        computers: [],
        loading: true,
        errMess: '',
        goods: []
    }

    url = "http://localhost:3457/products";
    
    componentDidMount = () => {
        Promise.all([
            fetch(this.url + "?category=health")
            .then((response) => response.json())
            .then((responseObject) =>
              this.setState({ sport : responseObject })
            ),
            fetch(this.url + "?category=beauty")
            .then((response) => response.json())
            .then((responseObject) =>
              this.setState({ beauty : responseObject })
            ),
            fetch(this.url + "?category=computers")
            .then((response) => response.json())
            .then((responseObject) =>
              this.setState({ computers : responseObject })
            ),
           ])
            .catch((err) => {
                this.setState({ error: true });
                console.log('An error occucred:', err);
            })

       
    }

    // showSearchResult = (searchString) => {
    //     fetch(this.url + searchString)
    //     .then((response) => response.json())
    //     .then((responseObject) =>
    //     this.setState({ searchedgoods: responseObject.Search})
    //     );
    // };

    render() {
        console.log(this.props);
        return(
            <>
        <div className='container'>
            <div className='row text-white pt-4 text-left'>
                <div className='col-12 d-flex justify-content-between'>
                    <h5>Categories</h5>
                
             
                 <Dropdown className='drop-select text-left'>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.setState({genre: 'sport'})}>Health & Household</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'beauty'})}>Beauty & Personal Care</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'computers'})}>Computers & Tablets</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'all'})}>All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    </div>
                </div>
               
            </div>
            { this.state.genre == null && (
            <div className='container'>
                  

                <RowOfItems 
                goods={this.state.sport}
                title="Health & Household"
                />
                <RowOfItems 
                goods={this.state.beauty} 
                title="Beauty & Personal care"
                />
                <RowOfItems 
                goods={this.state.computers}
                title="Computers & Tablets"

                />
                </div>
            )} 
            {
                this.state.genre === 'sport' && (
                    <div className='container'>
                         <RowOfItems 
                        goods={this.state.sport}
                        title="Sport"
                     />  
                   </div>
                 )
    
            }
             {
                 
                this.state.genre === 'beauty' && ( 
                    <div className='container'>
                        <RowOfItems 
                        goods={this.state.beauty}
                        title="Beauty"
                />   
                </div>
                )
    
            }
             {
                this.state.genre === 'computers' && (
                    <div className='container'>
                     <RowOfItems 
                    goods={this.state.computers}
                    title="Computers"
                />  
                </div>
                 )
    
            }
            {
                this.state.genre === 'all' && ( 
                 <div className='container'>
                    <RowOfItems 
                goods={this.state.sport}
                title="Sport"
                />
                <RowOfItems 
                goods={this.state.beauty} 
                title="Beauty"
                />
                <RowOfItems 
                goods={this.state.computers}
                title="Computers"

                />
               </div>
                )
    
            }
            </>
            
        )
    }
}



export default Main;