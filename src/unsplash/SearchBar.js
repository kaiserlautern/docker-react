import React from 'react';
import ReactDOM from 'react-dom'

class SearchBar extends React.Component{

    state = {}
    
    onInputChange(e){
        this.setState({term:e.target.value})
        
    }
    
    render(){
        return(
          <div>
            <form>
                <input type='text' onChange={this.onInputChange}/>
            </form>
          </div>
        )
    }
    
}