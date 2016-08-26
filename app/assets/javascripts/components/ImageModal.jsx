var ImageModal = React.createClass({

  propTypes: {
    url: React.PropTypes.string
  },

  render: function() {

    var url = this.props.url;

    if (url) {
      return (
          <div className="image-modal">
            <a href="#show-image"><i className="fa fa-file-image-o"></i></a>
          </div>
      );
    } else {
     return null;
    }
  }
});