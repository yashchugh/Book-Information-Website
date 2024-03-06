import React from 'react';

const Gallery = () => {
  return (
    <div
      className="content"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/3.jpg"})`,
        padding: '320px',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gallery content */}
      <h2 style={{ color: 'black', position: 'relative', left: '30px', top: '-320px' }}>Gallery Page</h2>
      <p style={{ color: 'black', position: 'relative', left: '30px', top: '-320px' }}>
        Welcome to the gallery! This is the protected area of your app.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/7.jpg"}
        alt="Solid Pic"
        height={400}
        width={400}
        style={{ marginTop: '-300px', marginLeft: '-475px' }}
      ></img>

      <img
        src={process.env.PUBLIC_URL + "/8.png"}
        alt="Solid Pic"
        height={400}
        width={400}
        style={{ marginTop: '-900px', marginLeft: '700px' }}
      ></img>
      <p
        style={{
          color: 'black',
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-60%)',
        }}
      >
        &copy; copyright2023
      </p>
    </div>
  );
};

export default Gallery;
