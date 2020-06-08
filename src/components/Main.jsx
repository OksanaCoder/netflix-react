import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import RowOfItems from "./RowOfItems";

class Main extends Component {
    
     state = {
        genre : null,
        harryPotterMovies: [],

    }

    url = "http://www.omdbapi.com/?apikey=34fd8839&s=harry%20potter";
    
    componentDidMount = () => {
        fetch(this.url)
          .then((response) => response.json())
          .then((responseObject) =>
            this.setState({ harryPotterMovies : responseObject.Search })
          )
          .catch((err) => {
              this.setState({ error: true });
              console.log('An error occucred:', err);
          })
    }

    // showSearchResult = (searchString) => {
    //     fetch(this.url + searchString)
    //     .then((response) => response.json())
    //     .then((responseObject) =>
    //     this.setState({ searchedMovies: responseObject.Search})
    //     );
    // };

    render() {
        return(
            <>
        <div className='container'>
            <div className='row text-white pt-4 text-left'>
                <div className='col-12 d-flex justify-content-between'>
                    <h5>{this.props.title}</h5>
                
             
                 <Dropdown className='drop-select text-left'>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Genres
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.setState({genre: 'history'})}>history</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'fantasy'})}>fantasy</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'romance'})}>romance</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'horror'})}>horror</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'scifi'})}>scifi</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    </div>
                </div>
               
            </div>
            <div className='container'>
                    
                        <RowOfItems movies={this.state.harryPotterMovies.slice(0, 6)} />
                
                </div>
            </>
            
        )
    }
}



export default Main;