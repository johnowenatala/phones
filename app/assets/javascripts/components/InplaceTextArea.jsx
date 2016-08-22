// var comments = phone.comments;
// if (!comments) {
//   comments = (
//       <span className="no-comments">No comments</span>
//   );
// }


var InplaceTextArea = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: ""
    };
  },

  render: function(){
    var value = this.props.children;
    if (!value) {
      value = "";
    }
    return (
        <form className={"inplace-textarea "+this.props.className} >
          <textarea placeholder="Insert your comments here" defaultValue={value}></textarea>
        </form>
    );
  }
});
