import React, { Component } from 'react';

const AppContext = React.createContext()

class AppProvider extends Component {
  state = {
    model: '',
    setModel: (model) => this.setState({ model }),
    attnGANImg: undefined,
    setAttnGANImg: (attnGANImg) => this.setState({ attnGANImg }),
    width: "340",
    height: "240",
    showResultCanvas: false,
    setShowResultCanvas: (showResultCanvas) => this.setState({ showResultCanvas })
  }
  
  render() {
    return (
    <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>)
  }
}

const withContext = (ReactComponent) => (
  props => (
    <AppContext.Consumer>
      {context => <ReactComponent {...props} context={context} />}
    </AppContext.Consumer>
  )
);

export {
  AppContext,
  AppProvider,
  withContext
};