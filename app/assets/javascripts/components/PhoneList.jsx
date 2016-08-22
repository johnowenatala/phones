var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var PhoneList = React.createClass({

  propTypes: {
    phones: React.PropTypes.array.isRequired
  },

  phones: function() {
    return this.props.phones.map(function(phone){
      return (
          <Phone
              key={phone.key}
              {...phone}
          >{phone.comments}</Phone>
      );
    });
  },

  render: function() {
    var phones = this.phones()
    return (
      <div className="phone-list">
        {phones}
      </div>
    );
  }
});