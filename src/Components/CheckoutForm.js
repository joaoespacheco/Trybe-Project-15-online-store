import React from 'react';

class CheckoutForm extends React.Component {
  render() {
    return (
      <section>
        <h2>Informaçoes do Comprador</h2>
        <form>
          <label htmlFor="fullname">
            <input
              data-testid="checkout-fullname"
              id="fullname"
              type="text"
              name="fullname"
              /* value={ fullname } */
              placeholder="Nome Completo"
            />
          </label>
          <label htmlFor="email">
            <input
              data-testid="checkout-email"
              id="email"
              type="email"
              name="email"
              /* value={ email } */
              placeholder="Email"
            />
          </label>
          <label htmlFor="cpf">
            <input
              data-testid="checkout-cpf"
              id="cpf"
              type="text"
              name="cpf"
              /* value={ cpf } */
              placeholder="CPF"
            />
          </label>
          <label htmlFor="telefone">
            <input
              data-testid="checkout-phone"
              id="telefone"
              type="text"
              name="telefone"
              /* value={ telefone } */
              placeholder="Telefone"
            />
          </label>
          <label htmlFor="cep">
            <input
              data-testid="checkout-cep"
              id="cep"
              type="text"
              name="cep"
              /* value={ cep } */
              placeholder="CEP"
            />
          </label>
          <label htmlFor="endereco">
            <input
              data-testid="checkout-address"
              id="endereco"
              type="text"
              name="endereco"
              /* value={ endereco } */
              placeholder="Endereço"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default CheckoutForm;
