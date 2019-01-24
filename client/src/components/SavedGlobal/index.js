import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import SavedGallery from '../SavedGallery';
import API from "../../utils/API";


class SavedGlobal extends Component{
    state = {
        items: [],
        promiseIsResolved: false
    };

    loadSaved() {
        
    }

    // async componentDidMount(){
    //     API.getBooks().then((res => this.setState({ items: res, promiseIsResolved: true })));
    // }
    render () {
        return(<SavedGallery items = {this.state.items} />)
    }
}

export default SavedGlobal