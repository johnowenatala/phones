var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('./store/configureStore.js');

var Spam = require('./Spam.jsx');

var store = configureStore();

class Root extends React.Component {
  componentWillMount(){

  }

  render(){
    return (
        <Provider store={store}>
          <div>This is a app X.1 <Spam /> </div>
        </Provider>
    );
  }

}

window.Root = Root;


//
// window.Root = React.createClass({
//
//   componentWillMount: function () {
//     //store.dispatch(undefined,null);
//   },
//
//   render: function(){
//     return (
//         <Provider store={store}>
//           <div>This is a app 7</div>
//         </Provider>
//     );
//   }
//
// });
//
