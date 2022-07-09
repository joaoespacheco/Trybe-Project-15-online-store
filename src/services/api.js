export async function getCategories() {
  // Implemente aqui
  const teste = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resposta = teste.json();
  return resposta;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
