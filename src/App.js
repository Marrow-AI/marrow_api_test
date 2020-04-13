import React, { Component } from 'react';
import { withContext } from './Provider';
import Camera from './Camera';
import Canvas from './Canvas';
import ModelOption from './ModelOption';

import './styles/App.scss';
import logo from './img/logo.svg';
import whiteImg from './img/white.png';

class App extends Component {
  render() {
    const { context } = this.props;

    return (
      <div className="App">
        <div className="Top">
          <img src={logo} alt="marrow" className="Top-Logo"/>
          <p>Dev Mode Test</p>
          <div className="CameraAndCanvas">
            <img
              src={context.attnGANImg ? context.attnGANImg : whiteImg}
              alt='attngan'
              width={context.width}
              height={context.height}
            />
          </div>
          <div className="Models">
            <ModelOption
              name='AttnGAN'
              url='http://ec2-52-206-213-41.compute-1.amazonaws.com:3333/query'
              emit='update_request'
              listen='update_response'
              receiveData={{
                image: '<base64Image>'
              }}
              emitData={{
                caption: '<base64Image>'
              }}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default withContext(App);
