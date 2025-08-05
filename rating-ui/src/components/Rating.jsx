const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    // <div style={styles.container}></div>
    <div className='rating-container'>
      <h2>Rate Your Experience</h2>
      <div className='stars'>
        {stars.map((star) => (
          <span key={star} className='star'>
            {'\u2605'}
          </span>
        ))}
      </div>
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
