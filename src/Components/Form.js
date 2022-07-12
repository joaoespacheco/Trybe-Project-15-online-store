import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      form: { email, description },
      formChanger,
      saveAvaliation,
    } = this.props;
    return (
      <section>
        Avaliações
        <form>
          <div>
            <label htmlFor="product-detail-email">
              <input
                data-testid="product-detail-email"
                type="email"
                name="email"
                value={ email }
                onChange={ formChanger }
                placeholder="Email"
              />
            </label>
            <label htmlFor="nota-1">
              <input
                data-testid="1-rating"
                type="radio"
                id="nota-1"
                name="rate"
                value="1"
                onChange={ formChanger }
              />
              1
            </label>
            <label htmlFor="nota-2">
              <input
                data-testid="2-rating"
                type="radio"
                id="nota-2"
                name="rate"
                value="2"
                onChange={ formChanger }
              />
              2
            </label>
            <label htmlFor="nota-3">
              <input
                data-testid="3-rating"
                type="radio"
                id="nota-3"
                name="rate"
                value="3"
                onChange={ formChanger }
              />
              3
            </label>
            <label htmlFor="nota-4">
              <input
                data-testid="4-rating"
                type="radio"
                id="nota-4"
                name="rate"
                value="4"
                onChange={ formChanger }
              />
              4
            </label>
            <label htmlFor="nota-5">
              <input
                data-testid="5-rating"
                type="radio"
                id="nota-5"
                name="rate"
                value="5"
                onChange={ formChanger }
              />
              5
            </label>
          </div>
          <div>
            <textarea
              data-testid="product-detail-evaluation"
              value={ description }
              name="description"
              onChange={ formChanger }
              placeholder="Mensagem(opicional)"
            />
          </div>
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ saveAvaliation }
          >
            Avaliar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  formChanger: PropTypes.func.isRequired,
  saveAvaliation: PropTypes.func.isRequired,
};

export default Form;
