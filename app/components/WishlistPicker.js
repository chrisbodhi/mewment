import React from 'react';
import _ from 'lodash';

const WishlistPicker = (props) => {
  const { category, choices, wishlist } = props;

  return (<fieldset>
    <label>{_.capitalize(category)}</label>
      {_.map(choices, (choice, ind) => (
        <label className="radio-inline">
          <input
            key={`${category}-choice-${ind}`}
            type="radio"
            {...wishlist}
            value={choice.value}
            checked={wishlist[category].value === choice.value}
          />
          {choice.value}
        </label>
        )
      )}
  </fieldset>);
};

WishlistPicker.propTypes = {
  wishlist: React.PropTypes.object.isRequired,
  category: React.PropTypes.string.isRequired,
  choices: React.PropTypes.array.isRequired
};

export default WishlistPicker;
