import React from 'react';
import { reduxForm } from 'redux-form';

const FormContainer = (props) => {
  const {
    fields: {
      name,
      age,
      sex,
      color,
      about,
      file,
      wishlist
    },
    handleSubmit,
    onSubmit,
    submitting,
    resetForm
  } = props;

  return (
    <div className="col-md-5 col-md-offset-1">
      <form name="profile" onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            required
            placeholder="Tk"
            {...name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="form-control"
            required
            placeholder="2"
            {...age}
          />
        </div>

        <div className="form-group">
          <label htmlFor="sex" required>Breeder?</label>
          <div>
            <label className="radio-inline">
              <input
                type="radio"
                {...sex}
                value="spayed"
                checked={sex.value === 'spayed'}
              />
              Spayed
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                {...sex}
                value="neutered"
                checked={sex.value === 'neutered'}
              />
              Neutered
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                {...sex}
                value="problematic"
                checked={sex.value === 'problematic'}
              />
              Contributing to the problem
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            className="form-control"
            required
            placeholder="Tabby"
            {...color}
          />
        </div>

        <div className="form-group">
          <label htmlFor="about">About</label>
          <textarea
            type="text"
            id="about"
            className="form-control"
            required
            rows="3"
            placeholder="I'm a mean motherfucker, but also snuggly."
            {...about}
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Profile Photo</label>
          <input
            type="file"
            id="file"
            {...file}
            value={null}
          />
        </div>

        <div className="form-group">
          <label htmlFor="wishlist" required>Wishlist</label>
          <div>
            <h4>Food <span className="wishlist-note">pick just one</span></h4>
            <label className="radio-inline">
              <input
                type="radio"
                {...wishlist}
                value="brand-a-dry-food"
                checked={wishlist.value === 'brand-a-dry-food'}
              />
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                {...wishlist}
                value="b-brand-wet-food"
                checked={wishlist.value === 'b-brand-wet-food'}
              />
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                {...wishlist}
                value="fictional-gravy"
                checked={wishlist.value === 'fictional-gravy'}
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={submitting}
        >
          {submitting ? <i /> : <i className="fa fa-paper-plane" />} Add Profile
        </button>
        <button
          type="submit"
          className="btn btn-default btn-lg"
          disabled={submitting}
          onClick={resetForm}
        >
          {submitting ? <i /> : <i />} Clear Form
        </button>
      </form>
    </div>
  );
};

FormContainer.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

const ProfileForm = reduxForm({
  form: 'profile',
  fields: ['name', 'age', 'sex', 'color', 'about', 'file', 'wishlist']
})(FormContainer);

export default ProfileForm;
