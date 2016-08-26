var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('./store/configureStore.js');

var store = configureStore();

class Root extends React.Component {
  componentWillMount(){

  }

  render(){
    return (
        <Provider store={store}>
          <div>This is a app 10</div>
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
