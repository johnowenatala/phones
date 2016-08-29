var SorterList = React.createClass({

  propTypes: {
    sort: React.PropTypes.shape({
      field: React.PropTypes.string.isRequired,
      order: React.PropTypes.oneOf([-1,0,1])
    })
  },

  getDefaultProps: function() {
    return {
      sort: {
        field: 'brand',
        order: -1
      }
    };
  },

  getSort: function(fieldName) {
    if (this.props.sort.field == fieldName) {
      return this.props.sort.order;
    }
    return 0;
  },

  render: function() {
    return (
        <div className="sorter-list">
          <Sorter key="brand-sorter"
                  field="brand"
                  label="Brand"
                  order={this.getSort('brand')} />
          <Sorter key="compat-sorter"
                  field="compatibility"
                  label="Compatibility"
                  order={this.getSort('compatibility')}/>
        </div>
    );
  }
});

window.SorterList = SorterList;