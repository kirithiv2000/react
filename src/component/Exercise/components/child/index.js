import React, {Component } from 'react';
import axios from "axios"
import Child from "./content"


class Anything extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content:""
         }
    }
    componentDidMount() {
        axios.get("https://saral.navgurukul.org/api/courses/"+
        this.props.match.params.id+"/exercise/getBySlug?slug="+
        this.props.match.params.slug).then(i=>{this.setState({content:i.data.content});console.log(i);})
    }
    render() { 
    return ( <Child data={this.state.content}/>);
    }
}
 
export default Anything;


