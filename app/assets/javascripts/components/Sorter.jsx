var Sorter = React.createClass({

  propTypes: {
    field: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    order: React.PropTypes.number.isRequired
  },


  componentDidMount: function(){
    console.log('sorter did mount');
  },

  linkClassName: function() {
    switch (this.props.order) {
      case -1:
        return "sort-desc";
      case 1:
        return "sort-asc";
      default:
        return "sort-unsorted";
    }
  },
  iconClassName: function() {
    switch (this.props.order) {
      case -1:
        return "fa fa-sort-desc";
      case 1:
        return "fa fa-sort-asc";
      default:
        return "fa fa-sort";
    }
  },

  render: function() {
    return (
        <div className="sorter">
          <a href="#" className={this.linkClassName()}>
            <span className="field">{this.props.label}</span>
            <i className={this.iconClassName()}></i>
          </a>
        </div>
    );
  }
});