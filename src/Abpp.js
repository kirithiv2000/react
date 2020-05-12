import React, { Fragment } from 'react';
import {
  Header,
  Footer,
  Exercies
} from "./component"


export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      course_name:"",
      description:""
    }
  }
  course_name=(e)=>{
    this.setState({[e.target.id]:e.target.value})
  }

  render(){
    return<Fragment>
      <Header course_name={e=>this.course_name(e)} 
      course_value={this.state.course_name} 
      description_value={this.state.description} 
      description_name={e=>this.course_name(e)}></Header>
      <Exercies manage={this.state}/>
      <Footer></Footer>
    </Fragment>
  }
}
