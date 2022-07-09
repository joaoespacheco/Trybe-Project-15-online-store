import React from 'react';

class ProductDetail extends React.Component {
  render() {
    return (
      <section>
        <h2 data-testid="product-detail-name">Produto 1 - R$ XXX,XX</h2>
        <div>
          <img src="https://cdn.awsli.com.br/600x450/1250/1250980/produto/48170719/panela-antiaderente-especial-24-cm-eirilar-4b8f8d96.jpg " alt="produto" />
          <div>
            <h3>Especificações Técnicas</h3>
            <p>Especificação 1</p>
            <p>Especificação 2</p>
            <p>Especificação 3</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetail;
