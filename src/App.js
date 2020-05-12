import React, { Fragment } from 'react';
import './App.css';
import  {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import Abpp from "./Abpp"
import Git from './component/Exercise/components'
import Last from "./component/Exercise/components/child"
import Lastex from "./component/Exercise/components/child/ex"

export default class App extends React.Component{
  constructor(){
    super()
    this.state={}
  }

  render(){
    return<Fragment>
      <Router>
        <Route exact path="/" component={Abpp}></Route>
        <Route exact path="/1/:id" component={Git}></Route>
        <Route exact path="/2/:id/:slug" component={Last}></Route>
        <Route exact path="/2/:id/:slug/:subslug" component={Lastex}></Route>

        
        </Router>
    </Fragment> 
  }
}
