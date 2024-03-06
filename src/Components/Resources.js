import React from 'react';

const Resources = () => {
  return (
    <div>
      <div
        className="content"
        style={{
          backgroundSize: 'cover',
          background: 'linear-gradient(to bottom, #FF0099 0%, #493240 100%)',
          //backgroundImage: `url(${process.env.PUBLIC_URL+ "/3.jpg"})`,
          padding: '25px 50px 300px 100px', // top right bottom left
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Resources content */}
        <h2>Resources Page</h2>
        <p style={{ color: 'black' }}>
          Welcome to the Resources! This is the protected area of your app.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QFaFIcGhPoM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Resources;
