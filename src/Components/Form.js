import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: '',
        rating: false,
        evaluation: '',
      },
    };
  }

  render() {
    const { index, form } = this.state;
    const { email, rating, evaluation } = form;
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
                placeholder="Email"
              />
            </label>
            <label htmlFor=""
              <input 
              data-testid={ `${index}-rating` }
              type="radio" 
              name="nota"
              value="1"
              checked={ rating } />
              1
            </label>
            <label>
              <input 
              data-testid={ `${index}-rating` } 
              type="radio"
              name="nota"
              value="2"
               />
              2
            </label>
            <label>
              <input
              data-testid={ `${index}-rating` } 
              type="radio" 
              name="nota"
              value="3"
              />
              3
            </label>
            <label />
            <input
            data-testid={ `${index}-rating` }
            type="radio" 
            name="nota"
            value="4"
            />
            4
            <label>
              <input 
              data-testid={ `${index}-rating` } 
              type="radio"
              name="nota"
              value="5" 
              />
              5
            </label>
            <div>
              <textarea
                data-testid="product-detail-evaluation"
                value={ evaluation }
                placeholder="Mensagem(opicional)"
              />
            </div>
          </div>
          <button
            data-testid="submit-review-btn"
            type="submit"
          >
            Avaliar
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
