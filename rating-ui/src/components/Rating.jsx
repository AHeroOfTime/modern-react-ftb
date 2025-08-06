import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

  return (
    // <div style={styles.container}></div>
    <div className='rating-container'>
      <h2>Rate Your Experience</h2>
      <div className='stars'>
        {stars.map((star) => (
          <span
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
            key={star}
            className={`star ${star <= (hover || rating) ? 'active' : ''}`}
          >
            {'\u2605'}
          </span>
        ))}
      </div>
      {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

// const styles = {
//   container: {
//     textAlign: 'center',
//     fontFamily: 'Arial',
//     padding: '20px',
//   },
// };

export default Rating;
