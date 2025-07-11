import React from 'react';

const ProfilePage = () => {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        👤 Your Profile
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2i6XFydeqrOSZ-CxZa_tjD_ePiUTVen-Fafa2V4OsprdcCX51g2LdDFDjqIar5ePlWOw&usqp=CAU"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginBottom: '20px',
          }}
        />
        <p style={{ fontSize: '18px', marginBottom: '10px' , marginRight:'10px'}}>
          <strong>Name:</strong> Harini.D 
        </p>
        <p style={{ fontSize: '18px', marginBottom: '10px' }}>
          <strong>Email:</strong>
          <a
            href="mailto:harini@example.com"
            style={{ textDecoration: 'none', color: '#337ab7' }}
          >
            harinibunnie@gmail.com
          </a>
        </p>
        <p style={{ fontSize: '18px', marginBottom: '10px', marginRight:'5px'}}>
          <strong>Account created:</strong> July 2025
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
