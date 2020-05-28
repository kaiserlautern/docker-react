import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component{

    onsubmit(){
        axios.get('',)
    }

    render(){
        return(
            <div>
                <SearchBar onSubmit={this.onsubmit} />
            </div>
        )
    }
}