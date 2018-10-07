import React, { Component } from 'react';
import { withContext } from './Provider';
import './styles/Camera.scss';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.Camera = React.createRef();
  }

  componentDidMount(){
    const { context } = this.props;
    navigator.mediaDevices
      .getUserMedia({video: { width: context.width, height: context.height }})
      .then((stream) => {
        this.Camera.current.srcObject = stream;
        return stream;
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }

  render() {
    const { context } = this.props;

    return (
      <div className="Camera">
        <video 
          playsInline
          autoPlay
          ref={this.Camera}
          src=''
          width={context.width}
          height={context.height}
          id='cameraElement'
        />
      </div>
    );
  }
}

export default withContext(Camera);
