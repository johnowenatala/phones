
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

  render: function(){

    var phone = this.props;
    return (
      <article className="phone">
        <header>
          <h1>{phone.brand}</h1>
          <h2>{phone.model} <span className="preview">[Img]</span></h2>

          <span className="stars">[Stars]</span>
        </header>
        <InplaceTextArea className="comments">{phone.comments}</InplaceTextArea>
      </article>
    );
  }
});