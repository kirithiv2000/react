import React, { Component } from 'react';
import Axios from 'axios';
import {
    Avatar,
    Card, CardHeader, Grid 
} from '@material-ui/core';
import  {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
class A extends Component {
    constructor() {
        super()
        this.state = {
            data: ""
        }
    }
    componentDidMount() {
        Axios
            .get("https://saral.navgurukul.org/api/courses/" + this.props.match.params.id + "/exercises")
            .then(i => this.setState({ data: i.data.data }))
    }
    render() {
        console.log(this.state)
        const any = this.state.data === "" ? "" : this.state.data.map(i => <Grid 
        item style={{margin:8,padding:8}} key={i.id}>
            <Link to={"/2/"+this.props.match.params.id+"/"+i.slug}>
            <Card key={i.id} style={{backgroundColor:"blue",color:"white"}} > 
            <CardHeader 
            title={i.name} 
            subheader={i.shortDescription} />
            </Card></Link>
            </Grid>)
        return (
              <div>
                  {any}
              </div>
        );
    }
}

export default A;