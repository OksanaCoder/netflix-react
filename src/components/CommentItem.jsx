import React, { Component } from 'react';


class CommentItem extends Component {
    state = {
        rate: '',
        name: '',
        comment: '',
        isLoading: true
    }
    onChange =  (event) => {
        
        console.log('data changed');
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value,
            rate: event.target.value
        })
 
    
    }
    handleSubmit = async (event) => {

        event.preventDefault();
       
        const toSend = {
            // rate: this.state.rate,
            comment: this.state.comment,
            name: this.state.name,
            elementID: this.props.imdbID
        }
        const resp = await fetch('https://striveschool.herokuapp.com/api/comments/',
        {
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : 'Basic dXNlcjIyOnlrZVpkQ1lOTHMyZHFiTWM='
            },
            method: 'POST',
            body: JSON.stringify(toSend)
        }
        )
        if(resp.ok) {
            console.log(await resp.json())
        }
    }
  render() {
  
    return(
    <>
     <form onSubmit={this.handleSubmit}>
                             <label>
                                    Leave your name:
                                    <input 
                                    type="text" 
                                    name="name" 
                                    className="ml-2"
                                    value={this.state.name}
                                    onChange={this.onChange} 
                                    />
                                </label>
                                <label>
                                    Leave your comment:
                                    <input 
                                    type="text" 
                                    name="comment" 
                                    className="ml-2"
                                    value={this.state.comment} 
                                    onChange={this.onChange} 
                                    />
                                </label>
                              
                          <div className="form-check">
                                <input  onChange={this.onChange} value={this.state.rate} checked={this.state.rate === 'perfect!'} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                <label className="form-check-label" for="exampleRadios1">
                                    Perfect !
                                </label>
                                </div>


                                <div className="form-check">
                                <input className="form-check-input" onChange={this.onChange}  checked={this.state.rate === 'So so'} value={this.state.rate} type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                <label   className="form-check-label" for="exampleRadios2">
                                    Cool but could be better
                                </label>
                                </div>
                                <div className="form-check disabled">
                                <input  onChange={this.onChange} value={this.state.rate} checked={this.state.rate === 'bad!'} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
                                <label className="form-check-label" for="exampleRadios3">
                                    Dull 
                                </label>
                                </div>
                                <button type="submit" className="mt-3" onClick={this.sendComment}>Send</button>
                              </form>
    </>
      )
  }
}


export default CommentItem;