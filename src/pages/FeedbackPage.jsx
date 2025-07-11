import React, { useState } from 'react';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === '') {
      setError('Please fill out the feedback field.');
    } else {
      setSubmitted(true);
      setFeedback('');
      setError('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', }} >
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Feedback</h1>
      {submitted ? (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>
          Thank you for your feedback!
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea rows="5" cols="50" placeholder="Write your feedback here..." style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', }} value={feedback} onChange={(e) => setFeedback(e.target.value)} ></textarea>
          {error && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {error}
            </p>
          )}
          <br />
          <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', }} >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackPage;

