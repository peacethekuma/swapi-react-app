import React from 'react';
import CategoriesList from './CategoriesList';
import Pagination from './Pagination';

const Wrapper = (props) => {
  return (
    <div className="App w-80-l center">
      <h1 className="tc"> SW-API APP </h1>
      <CategoriesList route={ props.route } onButtonCategorySelection={ props.onButtonCategorySelection } />
      { props.children }
      { props.pages.next || props.pages.prev ? <Pagination pages={ props.pages } onButtonPrevPage={ props.onButtonPrevPage } onButtonNextPage={ props.onButtonNextPage } /> : null}
    </div>
  )
}

export default Wrapper;

