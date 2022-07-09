import React from 'react';
import PropTypes from 'prop-types';
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
    const { categoryFilter } = this.props;
    return (
      <section>
        { categories.map(({ id, name }) => (
          <button
            name={ id }
            key={ id }
            data-testid="category"
            type="button"
            onClick={ categoryFilter }
          >
            {name}
          </button>
        ))}
      </section>
    );
  }
}

Categories.propTypes = {
  categoryFilter: PropTypes.func.isRequired,
};

export default Categories;
