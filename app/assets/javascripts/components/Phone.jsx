
var Phone = React.createClass({

  propTypes: {
    brand: React.PropTypes.string.isRequired,
    model: React.PropTypes.string.isRequired,
    photo: React.PropTypes.string,
    compatibility: React.PropTypes.oneOf(['full', 'good', 'medium', 'poor', 'unknown']),
    comments: React.PropTypes.string
  },


  render: function(){

    var phone = this.props;

    return (
      <article>{phone.brand} {phone.model}</article>
    );
  }
});