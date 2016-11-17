const React = require('react');

class Product extends React.Component {

  render() {
    return (
      <div>
      <p>Name: {this.props.name}</p>
      <p>Producer: {this.props.producer}</p>
      <p>Does this have a Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</p>
      <p>Color: {this.props.color}</p>
      <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf(range(80, 300)).isRequired
}

function range(start, end) {
  var array = [];
  for (let i = start; i < (end+1); i++){
    array.push(i)
  };
  return array;
};

module.exports = Product;
