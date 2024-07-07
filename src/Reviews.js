import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('Anonymous');
  const [plan, setPlan] = useState('');
  const [planId, setPlanId] = useState('');
  const [rating, setRating] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const addReview = () => {
    const newReview = {
      name,
      plan,
      planId,
      rating: parseInt(rating),
      email,
      review,
    };

    setReviews([...reviews, newReview]);

    // Clear the form fields
    setName('Anonymous');
    setPlan('');
    setPlanId('');
    setRating('');
    setEmail('');
    setReview('');

    // Update the average rating
    updateAverageRating([...reviews, newReview]);
  };

  const updateAverageRating = (reviewsList) => {
    const ratings = reviewsList.map(review => review.rating);
    const averageRating = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
    document.getElementById('average-rating').textContent = '★'.repeat(Math.round(averageRating)) + '☆'.repeat(5 - Math.round(averageRating));
  };

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      <p>Check out our latest reviews</p>
      <p>Average Rating: <span id="average-rating">☆☆☆☆☆</span></p>
      <div id="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <img src="avatar-placeholder.png" alt="User Avatar" width="50" height="50" />
            <div className="review-details">
              <p><strong>{review.name}</strong></p>
              <p>Plan: {review.plan}</p>
              <p>Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            </div>
            <div className="review-text">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="review-form-container">
        <h2>Leave us a review!</h2>
        <form id="review-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} /><br />
          <label htmlFor="plan">Plan:</label>
          <input type="text" id="plan" name="plan" value={plan} onChange={e => setPlan(e.target.value)} /><br />
          <label htmlFor="plan-id">Plan ID:</label>
          <input type="text" id="plan-id" name="plan-id" value={planId} onChange={e => setPlanId(e.target.value)} /><br />
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" name="rating" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
          <label htmlFor="review">Review:</label>
          <textarea id="review" name="review" value={review} onChange={e => setReview(e.target.value)}></textarea><br />
          <button type="button" onClick={addReview}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
