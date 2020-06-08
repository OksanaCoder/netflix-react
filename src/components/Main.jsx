import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import RowOfItems from "./RowOfItems";

class Main extends Component {
    
     state = {
        genre : null,
        harryPotterMovies: [],
        spiderMovies: [],
        starWarsMovies: []

    }

    url = "http://www.omdbapi.com/?apikey=34fd8839";
    
    componentDidMount = () => {
        Promise.all([
            fetch(this.url + "&s=harry%20potter")
            .then((response) => response.json())
            .then((responseObject) =>
              this.setState({ harryPotterMovies : responseObject.Search })
            ),
            fetch(this.url + "&s=spider%20man")
            .then((response) => response.json())
            .then((responseObject) =>
              this.setState({ spiderMovies : responseObject.Search })
            ),
            fetch(this.url + "&s=star%20wars")
            .then((response) => response.json())
            .then((responseObject) =>
              this.setState({ starWarsMovies : responseObject.Search })
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
                    <Dropdown.Item onClick={() => this.setState({genre: 'harryPotterMovies'})}>HarryPotter Movies</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'spiderMovies'})}>SpiderMan Movies</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'starWarsMovies'})}>StarWars Movies</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.setState({genre: 'all'})}>All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    </div>
                </div>
               
            </div>
            { this.state.genre == null && (
            <div className='container'>
                  

                <RowOfItems 
                movies={this.state.harryPotterMovies.slice(0, 6)}
                title="Harry Potter"
                />
                <RowOfItems 
                movies={this.state.spiderMovies.slice(0, 6)} 
                title="SpiderMan"
                />
                <RowOfItems 
                movies={this.state.starWarsMovies.slice(0, 6)}
                title="StarWars"

                />
                </div>
            )} 
            {
                this.state.genre === 'harryPotterMovies' && (
                    <div className='container'>
                         <RowOfItems 
                        movies={this.state.harryPotterMovies.slice(0, 6)}
                        title="Harry Potter"
                     />  
                   </div>
                 )
    
            }
             {
                 
                this.state.genre === 'spiderMovies' && ( 
                    <div className='container'>
                        <RowOfItems 
                        movies={this.state.spiderMovies.slice(0, 6)}
                        title="SpiderMan"
                />   
                </div>
                )
    
            }
             {
                this.state.genre === 'starWarsMovies' && (
                    <div className='container'>
                     <RowOfItems 
                    movies={this.state.starWarsMovies.slice(0, 6)}
                    title="Harry Potter"
                />  
                </div>
                 )
    
            }
            {
                this.state.genre === 'all' && ( 
                 <div className='container'>
                    <RowOfItems 
                movies={this.state.harryPotterMovies.slice(0, 6)}
                title="Harry Potter"
                />
                <RowOfItems 
                movies={this.state.spiderMovies.slice(0, 6)} 
                title="SpiderMan"
                />
                <RowOfItems 
                movies={this.state.starWarsMovies.slice(0, 6)}
                title="StarWars"

                />
               </div>
                )
    
            }
            </>
            
        )
    }
}



export default Main;