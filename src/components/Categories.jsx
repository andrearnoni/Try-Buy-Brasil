import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import '../Categories.css';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((response) => this.setState({ categories: response }));
  }

  render() {
    const { handleClick } = this.props;
    const { categories } = this.state;
    return (
      <div>
        <ul className="categories-list">
          <h3 className="categories-title">Categorias</h3>
          {categories
            .map((cat) => (
              <li
                key={ cat.id }
              >
                <input
                  data-testid="category"
                  className="categories-item"
                  onClick={ handleClick }
                  value={ cat.name }
                  id={ cat.id }
                  type="button"
                />
              </li>))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
