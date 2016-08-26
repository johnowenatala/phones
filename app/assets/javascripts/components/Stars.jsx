var Stars = React.createClass({

  propTypes: {
    value: React.PropTypes.number.isRequired,
    stars: React.PropTypes.number,
    maxValue: React.PropTypes.number
  },

  // Returns the number of starts (float) to fill.
  // Must be a value between 0 and this.starts() (both inclusive)
  value: function () {
    var stars = this.stars();
    // by default, max value will be the number of stars
    var maxValue = this.props.maxValue || stars;
    return 1.0 * this.props.value / maxValue * stars;
  },

  // Returns the number of starts (integer) to render
  stars: function() {
    var stars = this.props.stars;
    if (!stars || stars < 1) {
      stars = 5;
    }
    return stars;
  },

  render: function() {

    var numberOfStars = this.stars();
    var value = this.value();

    var stars = [];
    for (var i=numberOfStars; i >= 1; i--) {
      var className = (i > value) ? "star" : "star filled";
      stars.push(
          <a href={"#rating-"+i} data-value={i} key={"rating-"+i} >
            <span className={className}></span>

          </a>
      );
    }

    return (
        <div className={"stars rating "+value}>{stars}</div>
    );
  }
});