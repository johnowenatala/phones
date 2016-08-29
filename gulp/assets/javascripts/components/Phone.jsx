
var Phone = React.createClass({

  propTypes: {
    brand: React.PropTypes.string.isRequired,
    model: React.PropTypes.string.isRequired,
    photo: React.PropTypes.string,
    compatibility: React.PropTypes.oneOf(['full', 'good', 'medium', 'poor', 'unknown']),
    comments: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      photo: null,
      compatibility: null,
      comments: null
    };
  },

  compatibilityLevel: function () {
    switch(this.props.compatibility) {
      case 'full':
        return 4;
      case 'good':
        return 3;
      case 'medium':
        return 2;
      case 'poor':
        return 1;
      default:
        return 0;
    }
  },

  render: function(){

    var phone = this.props;
    return (
      <article className="phone">
        <header>
          <h1>{phone.brand}</h1>
          <h2>{phone.model} <span className="preview"><ImageModal url={phone.photo} /></span></h2>

          <Stars className="stars" maxValue={4} stars={4} value={this.compatibilityLevel()}></Stars>
        </header>
        <InplaceTextArea className="comments">{phone.comments}</InplaceTextArea>
      </article>
    );
  }
});

window.Phone = Phone;