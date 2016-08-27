import React from 'react';
import _ from 'lodash';

const WishlistPicker = (props) => {
  const { category, choices, wishlist } = props;
  return (<fieldset>
    <legend>{_.capitalize(category)}</legend>
      {_.map(choices, (choice, ind) => (
        <label
          className="radio-inline"
          key={`${category}-choice-${ind}`}
        >
          <input
            type="radio"
            {...wishlist[category]}
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
