import React, {Component} from 'react';
import axios from 'axios';

class Memes extends Component{

    componentDidMount() {
        axios.get(`/api/memes`).then(Response => {
            
        })
    }

    render(){
        return(
            <div>
                memes
            </div>
        )
    }
}

export default Memes;