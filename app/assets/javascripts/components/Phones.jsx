
var Phones = React.createClass({

  loadPhones: function() {
    $.ajax({
      url: this.props.sourceUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("some data received", data);
        // console.log("data received: ", data)
        this.setState({phones: data['phones']});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('Algo anda mal', 'background: #ffcc99;');
      }
    });
  },



  getInitialState: function() {
    return {phones: []};
  },

  componentDidMount: function(){
    console.log('component did mount');
    this.loadPhones();
    setInterval(this.loadPhones, this.props.pollInterval);
  },

  render: function() {
    return (
        <PhoneList phones={this.state.phones}></PhoneList>
    );
  }
});