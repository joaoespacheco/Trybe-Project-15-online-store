import React from 'react';
import PropTypes from 'prop-types';

class ProductAvaliation extends React.Component {
  inputGeneration = (rate) => {
    const inputs = [];
    const inputNumber = 5;
    for (let index = 0; index < inputNumber; index += 1) {
      if (index < rate) {
        inputs.push(<input key={ index } type="radio" checked />);
      } else {
        inputs.push(<input key={ index } type="radio" checked={ false } />);
      }
    }
    return inputs;
  };

  render() {
    const { avaliation } = this.props;
    return (
      <section>
        {avaliation.map(({ email, rate, description }, index) => (
          <div key={ `${email}-${index}` }>
            <h3>{email}</h3>
            { this.inputGeneration(rate) }
            <p>{description}</p>
          </div>
        ))}
      </section>
    );
  }
}

ProductAvaliation.propTypes = {
  avaliation: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductAvaliation;

