import React, { Fragment } from "react";
import axios from "axios"
import {
    Avatar,
    Card, CardHeader, Grid 
} from '@material-ui/core';
import { BrowserRouter, Route, Link } from "react-router-dom";
export default class Exercise extends React.Component {
    constructor() {
        super()
        this.state = {
            data: { "availableCourses": [] }
        }
    }
    componentDidMount() {
        axios.get("https://saral.navgurukul.org/api/courses").then(e => { this.setState({ data: e.data }) }).catch(e => console.log(e))
    }
    render() {
        
        const exer = this.state.data.availableCourses
        .filter(e=> e.name.toLowerCase().includes(this.props.manage.course_name.toLowerCase()) )
        .filter(e=> e.shortDescription.toLowerCase().includes(this.props.manage.description.toLowerCase()) )
        .map(i =><Grid item style={{margin:8,padding:8,width:"30%"}} key={i.id}>
            <Link className="we" to={"/1/"+i.id}>
                <Card key={i.id} style={{height:"100%"}}> 
                <CardHeader 
                avatar={<Avatar aria-label="recipe" 
                        src={i.logo} />} 
                title={i.name} 
                subheader={i.shortDescription} />
                </Card></Link>
                </Grid>
        )
        return (<Fragment>
            <Grid container style={{justifyContent:"center"}}>   
            {exer}
            </Grid>

        </Fragment>)
    }
}