import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className="reviews-page">
      <h1>Workout/Nutrition Plan</h1>
      <div className="plan-details">
        <div className="plan-section">
          <h2>Workout Plan</h2>
          <p>Workout type: Cardio | Intensity Level: High | Duration: {'>'} 60 minutes</p>
          <div className="plan-content">
            <div className="warm-up">
              <h3>Warm-Up (5-10 minutes):</h3>
              <ul>
                <li>Jumping Jacks - 3 minutes</li>
                <li>High Knees - 2 minutes</li>
                <li>Arm Circles - 1 minute (30 seconds each direction)</li>
                <li>Leg Swings - 1 minute (30 seconds each leg)</li>
              </ul>
            </div>
            <div className="main-workout">
              <h3>Main Workout (30-45 minutes):</h3>
              <ul>
                <li>Running/Jogging:
                  <ul>
                    <li>Outdoor: 20-30 minutes at a steady pace</li>
                    <li>Treadmill: 20-30 minutes at 5-7 mph</li>
                  </ul>
                </li>
                <li>Intervals:
                  <ul>
                    <li>Sprint: 1 minute</li>
                    <li>Walk: 2 minutes</li>
                    <li>Repeat 5 times</li>
                  </ul>
                </li>
                <li>Cycling:
                  <ul>
                    <li>Outdoor: 20-30 minutes at a moderate pace</li>
                    <li>Stationary Bike: 20-30 minutes at level 5-7 resistance</li>
                  </ul>
                </li>
                <li>Rowing Machine:
                  <ul>
                    <li>10-15 minutes at medium resistance</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="cool-down">
              <h3>Cool-Down (5-10 minutes):</h3>
              <ul>
                <li>Walking - 5 minutes</li>
                <li>Stretching - 5 minutes
                  <ul>
                    <li>Hamstring stretch</li>
                    <li>Quad stretch</li>
                    <li>Calf stretch</li>
                    <li>Shoulder stretch</li>
                    <li>Triceps stretch</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="image-article-section">
          <img src="path/to/your/image.png" alt="Workout" />
          <div className="article-text">
            <p>In this article you'll learn what Zone 2 is, how it can help you, and how you can implement it into your personal plan to help you make the most out of your cardio sessions. Training and living a fitness-based lifestyle is a serious commitment. So, when you take that time to exercise, you want to know that the approach...</p>
            <div className="article-buttons">
              <button className="continue-button">Continue to article</button>
              <button className="new-button">New article</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
