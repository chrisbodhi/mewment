import React from 'react';
import { reduxForm } from 'redux-form';
import classNames from 'classnames';

const Form = (props) => {
  const {
    fields: {
      uid,
      id,
      imageUrl,
      feed
    },
    handleSubmit,
    resetForm,
    submitting,
    status,
    cats
  } = props;

  const formClass = classNames(feed.value,
    { shown: status.showUploadForm },
    { hidden: !status.showUploadForm }
  );
  const index = status.catIndexForUpload;
  const name = index !== null ? cats[index].name : '';
  return (
    <form onSubmit={handleSubmit} className={formClass}>
      <div>
        <label>Add Photo for {name}</label>
        <div>
          <input type="file" {...imageUrl} value={null} />
        </div>
        <div>
          <label className="radio-inline">
            <input
              type="radio"
              {...feed}
              value="private"
              checked={feed.value === 'private'}
            />
            Private
          </label>
          <label className="radio-inline">
            <input
              type="radio"
              {...feed}
              value="public"
              checked={feed.value === 'public'}
            />
            Public
          </label>
        </div>
        <div>
          <input type="hidden" value={uid} />
          <input type="hidden" value={id} />
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting
              ? <i className="fa fa-hand-paper-o" aria-hidden="true" />
              : <i className="fa fa-hand-o-right" aria-hidden="true" />}
              Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            <i className="fa fa-hand-scissors-o" aria-hidden="true" />
            Clear Image
          </button>
        </div>
      </div>
    </form>);
};

Form.propTypes = {
  cats: React.PropTypes.array.isRequired,
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  status: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired

};

const UploadForm = reduxForm({
  form: 'file',
  fields: ['uid', 'id', 'imageUrl', 'feed']
})(Form);

export default UploadForm;
