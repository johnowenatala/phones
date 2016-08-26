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

  setTextArea: function(textarea) {
    this.textarea = textarea;
  },
  onChange: function() {
    console.log("Textarea changed: ",this.textarea.value)
  },

  render: function(){
    var value = this.props.children;
    if (!value) {
      value = "";
    }
    var rthis = this;
    return (
        <form className={"inplace-textarea "+this.props.className} >
          <textarea
              placeholder="Insert your comments here"
              defaultValue={value}
              ref={this.setTextArea}
              onChange={this.onChange}
          />
        </form>
    );
  }
});
