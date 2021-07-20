import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { reviewFilm } from '../../store/api-actions';

function AddReview({ authorizationStatus, onSubmitReview }) {
  const {id} = useParams();

  const commentRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmitReview({
      rating: Number(fieldChange),
      comment: commentRef.current.value ?? '',
    }, id);
  };

  // eslint-disable-next-line
  const [fieldChange, setFieldChange] = React.useState(5);

  const handleFieldChange = React.useCallback((evt) => {
    setFieldChange(evt.target.value);
  }, []);

  const makeArray = () => {
    const result = [];

    for (let i = 10; i > 0; i--) {
      result.push(i);
    }

    return result;
  };

  const starsArray = makeArray();

  return (
    <div className="add-review">
      <form action="#" className="add-review__htmlForm" >
        <div className="rating">
          <div className="rating__stars">
            {starsArray.map((item) => (
              <React.Fragment key={item}>
                <input className="rating__input" id={`star-${item}`} type="radio" name="rating" value={item} onClick={handleFieldChange} />
                <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
              </React.Fragment>
            ),
            )}
          </div>
        </div>

        <div className="add-review__text">
          <textarea ref={ commentRef } className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={ handleSubmit }>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

AddReview.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onSubmitReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitReview(review, id) {
    dispatch(reviewFilm(review, id));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
