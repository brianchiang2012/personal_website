
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
const e = React.createElement;

class ZoomEffect extends React.Component
{
  render()
  {
    return(

       <Fade right>
            <p> Hello There</p>
      </Fade>

    );
  }
}
ReactDOM.render(<ZoomEffect/>, document.getElementById('zoomContainer'));
export default ZoomEffect
