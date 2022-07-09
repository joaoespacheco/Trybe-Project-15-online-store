import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        { categories.map(({ id, name }) => (
          <button
            key={ id }
            data-testid="category"
            type="button"
          >
            {name}
          </button>
        ))}
      </section>
    );
  }
}

export default Categories;
