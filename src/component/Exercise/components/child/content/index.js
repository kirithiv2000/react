import React, {Component } from 'react';
import Markdown from 'markdown-to-jsx';
import Markd from "react-markdown";
const blockEmbedPlugin = require('markdown-it-block-embed');
const md = require('markdown-it')({
    html: true,
    linkify: true,
    breaks: true,
    typographer: true,
  })
    .enable(['link'])
    .enable('image')
    .use(require('markdown-it-highlightjs'));
  
  md.use(blockEmbedPlugin, {
    containerClassName: 'video-embed',
  });
class Anything extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content:""
         }
    }

    updateLinks = htmlFromServer => {
        const courseDetail = new DOMParser().parseFromString(
          htmlFromServer,
          'text/html',
        );
        const anchorList = courseDetail.querySelectorAll('a');
        anchorList.forEach(anchor => {
          if (anchor.innerText === 'Saral') {
            return false;
          } else {
            anchor.setAttribute('target', '_blank');
          }
        });
        return courseDetail.body.innerHTML;
      };
    render() {   
        
    return ( <div id="course" dangerouslySetInnerHTML={{ __html: this.updateLinks(md.render(this.props.data)),}}/> );
    }
}
 


export default Anything;


