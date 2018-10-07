import React, {Component} from 'react';
import { withContext } from './Provider';
import './styles/Canvas.scss';

class Canvas extends Component {

  componentDidMount() {
    window.requestAnimationFrame(this.renderVideoIntoCanvas);
  }

  renderVideoIntoCanvas = () => {
    const { context } = this.props;
    const video = document.getElementById('cameraElement');
    const canvas = document.getElementById('videoCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, context.width, context.height);
      window.requestAnimationFrame(this.renderVideoIntoCanvas);
    }
  }

  render() {
    const { context } = this.props;

    let resultCanvasDisplay = 'none';
    if (context.showResultCanvas) {
      resultCanvasDisplay = 'inline';
    }

    return (
      <div className="Canvas">
        <canvas
          width={context.width}
          height={context.height}
          id="videoCanvas"
        />
        <canvas 
          width={context.width} 
          height={context.height} 
          id="resultCanvas"
          style={{ 
            display: resultCanvasDisplay
          }}
        />
      </div>
    );
  }
}

export default withContext(Canvas);