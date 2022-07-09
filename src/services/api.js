export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId = false, query = false) {
  if (categoryId && query) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      return error;
    }
  } else if (categoryId) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      return error;
    }
  } else if (query) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}

export async function getFetchProduct(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}
