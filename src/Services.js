import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="service-container">
        <div className="service-card">
          <h2>Workout ($30)</h2>
          <form>
            <div className="service-section">
              <h3>Workout Type:</h3>
              <label><input type="checkbox" name="workoutType" value="Cardio" /> Cardio</label>
              <label><input type="checkbox" name="workoutType" value="Strength Training" /> Strength Training</label>
              <label><input type="checkbox" name="workoutType" value="Yoga" /> Yoga</label>
            </div>
            <div className="service-section">
              <h3>Intensity Level:</h3>
              <label><input type="checkbox" name="intensityLevel" value="Low" /> Low</label>
              <label><input type="checkbox" name="intensityLevel" value="Medium" /> Medium</label>
              <label><input type="checkbox" name="intensityLevel" value="High" /> High</label>
            </div>
            <div className="service-section">
              <h3>Duration:</h3>
              <label><input type="checkbox" name="duration" value="< 30 minutes" /> &lt; 30 minutes</label>
              <label><input type="checkbox" name="duration" value="30 - 60 minutes" /> 30 - 60 minutes</label>
              <label><input type="checkbox" name="duration" value="> 60 minutes" /> &gt; 60 minutes</label>
            </div>
            <button type="submit">Continue</button>
          </form>
        </div>
        <div className="service-card">
          <h2>Nutrition ($20)</h2>
          <form>
            <div className="service-section">
              <h3>Dietary Focus:</h3>
              <label><input type="checkbox" name="dietaryFocus" value="Protein" /> Protein</label>
              <label><input type="checkbox" name="dietaryFocus" value="Carbohydrates" /> Carbohydrates</label>
              <label><input type="checkbox" name="dietaryFocus" value="Fats" /> Fats</label>
            </div>
            <div className="service-section">
              <h3>Exercise Frequency:</h3>
              <label><input type="checkbox" name="exerciseFrequency" value="Daily" /> Daily</label>
              <label><input type="checkbox" name="exerciseFrequency" value="3-5 times a week" /> 3-5 times a week</label>
              <label><input type="checkbox" name="exerciseFrequency" value="1-2 times a week" /> 1-2 times a week</label>
            </div>
            <div className="service-section">
              <h3>Duration:</h3>
              <label><input type="checkbox" name="duration" value="< 4 months" /> &lt; 4 months</label>
              <label><input type="checkbox" name="duration" value="4 - 12 months" /> 4 - 12 months</label>
              <label><input type="checkbox" name="duration" value="> 12 months" /> &gt; 12 months</label>
            </div>
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
