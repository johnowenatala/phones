
var XPhones = React.createClass({

  propTypes: {
    pollInterval: React.PropTypes.number,
    polling: React.PropTypes.bool,
    title: React.PropTypes.string
  },

  loadPhones: function() {
    $.ajax({
      url: this.props.sourceUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("some data received", data);
        // console.log("data received: ", data)
        this.setPhones(data['phones']);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('Algo anda mal', 'background: #ffcc99;');
      }
    });
  },

  setPhones: function(phones) {
    phones = this.mapPhones(phones);
    this.setState({phones: phones});
  },

  mapPhones: function(data) {
    return data.map(function(phone,i){
      phone.key = phone.uid + "" + new Date().getTime();
      return phone;
    });
  },

  getDefaultProps: function() {
    return {
      pollInterval: 2000,
      title: 'Phones',
      polling: true
    };
  },

  getInitialState: function() {
    return {phones: []};
  },

  componentDidMount: function(){
    console.log('component did mount');
    this.loadPhones();
    if (this.props.polling) {
      setInterval(this.loadPhones, this.props.pollInterval);
    }
  },

  render: function() {
    return (
        <div className="phones">
          <h1>{this.props.title}</h1>
          <Search />
          <SorterList />
          <PhoneList phones={this.state.phones}></PhoneList>
        </div>
    );
  }
});