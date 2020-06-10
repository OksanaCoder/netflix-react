import React, { Component } from 'react';


 class Comments extends Component {
   state = {
     r: 0
   }
   changeNumber = () => {
   this.setState({
     r: Math.floor(Math.random() * 10)
   })
   }
    render() {
        return (
          <>
          <div className='container mt-4'>
            <h5 style={{color: '#fff'}}>Comments</h5>
         
          <button className='btn btn-success' onClick={this.changeNumber}>Get random</button>
          <Random number={this.state.r}/>
          </div>
          </>
            );
    }    
    
 
}



class Random extends Comments {
  render(){
    return(
      <>
      <div className='text-white'>{this.props.number}</div>
      </>
    )
  }
}
export default Comments;