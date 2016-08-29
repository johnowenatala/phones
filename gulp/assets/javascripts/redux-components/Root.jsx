import { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.es6'

const propTypes = {
  initialData: PropTypes.shape({
    phones: PropTypes.array.isRequired,
    order: PropTypes.object,
    filter: PropTypes.string
  })
}

const defaultProps = {
  initialData: {
    phones: []
  }
}

class Root extends Component {

  constructor(props) {
    super(props)
    
    this.store = configureStore(this.props.initialData)
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>This is a app X.3 </div>
      </Provider>
    );  
  }  
}

Root.propTypes = propTypes;
Root.defaultProps = defaultProps;


export default Root
