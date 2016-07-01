import React from 'react';
import { showUploadForm } from '../actions';

class CatList extends React.Component {
  handleClick(index) {
    this.props.dispatch(showUploadForm(index));
  }

  render() {
    const { cats } = this.props;
    return (<ul>
      {cats.map((cat, index) => (
        <li onClick={() => this.handleClick(index)} key={index}>
          {cat.name}
        </li>)
      )}
    </ul>);
  }
}

CatList.propTypes = {
  cats: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

export default CatList;
