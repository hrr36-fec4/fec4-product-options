import React from 'react';

class Quantity extends React.Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ quantity: parseInt(event.target.value, 10) });
  }

  handleClick(val) {
    let { quantity } = this.state;

    if (quantity + val >= 0) {
      quantity += val;
      this.setState({ quantity });
    }
  }

  render() {
    const { quantity } = this.state;

    return (
      <div className="quantity-wrapper">
        <label htmlFor="quantity-input">
          <div className="quantity-label">Quantity</div>
          <button type="button" onClick={() => this.handleClick(-1)}>
            <i className="fas fa-minus" />
          </button>
          <input id="quantity-input" type="text" value={quantity} onChange={this.handleChange} />
          <button type="button" onClick={() => this.handleClick(1)}>
            <i className="fas fa-plus" />
          </button>
        </label>
      </div>
    );
  }
}

export default Quantity;
