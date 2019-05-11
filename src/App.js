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
          {
            context.model !== 'AttnGAN'
            ?
              <div className="CameraAndCanvas"> 
                <Camera />
                <Canvas />
              </div>
            :
              <div className="CameraAndCanvas"> 
                <img 
                  src={context.attnGANImg ? context.attnGANImg : whiteImg}
                  alt='attngan'
                  width={context.width}
                  height={context.height}
                />
              </div>
          }
          <div className="Models">
            <ModelOption 
              name='DensePose'
              url='https://densepose.api.marrow.raycaster.studio/query'
              emit='get_pose'
              listen='pose_update'
              receiveData={{
                results: '<base64Image>'
              }}
              emitData={{
                data: '<base64Image>'
              }}
            />
            <ModelOption 
              name='Pix2PixHD'
              url='http://ec2-18-234-49-43.compute-1.amazonaws.com:22100/query'
              emit='update_request'
              listen='update_response'
              receiveData={{
                results: '<base64Image>'
              }}
              emitData={{
                data: '<base64Image>'
              }}
            />
            <ModelOption 
              name='AttnGAN'
              url='http://ec2-18-234-49-43.compute-1.amazonaws.com:3333/query'
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

