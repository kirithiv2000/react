import React, { Fragment } from "react";
import InputBase from '@material-ui/core/InputBase';

import{
     AppBar,
     Toolbar,
     Typography
    }from '@material-ui/core';
export default ({course_name,course_value,description_name,description_value})=>
<Fragment>
<AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" style={{flex:1}}>
      Courses
    </Typography>
    <InputBase
              id="course_name"
              placeholder="Search… course name"
              inputProps={{ 'aria-label': 'search' }}
              value={course_value}
              style={{color:"white"}}
              onChange={course_name}
            />
    <InputBase
              id="description"
              placeholder="Search… description"
              inputProps={{ 'aria-label': 'search' }}
              onChange={description_name}
              style={{color:"white"}}
              value={description_value}
            />
  </Toolbar>
</AppBar>
</Fragment>
