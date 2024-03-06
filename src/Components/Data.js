import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const openPopup = () => {
    setShowPopup(true);
    setNewTitle("");
  };

  const closePopup = () => {
    setShowPopup(false);
    setNewTitle("");
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleAddClick = () => {
    const newPost = {
      id: posts.length + 1,
      title: newTitle,
    };

    setPosts(prevPosts => [...prevPosts, newPost]);
    setShowPopup(false);
    setNewTitle("");
  };

  const handleButtonClick = (postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
        setErrorMsg('Error retrieving data');
      });
  }, []);

  return (
    <div
      className="content"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/4.png"})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        textAlign: 'left',
      }}
    >
      {showPopup && (
        <div className="popup" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-45%, -45%)', backgroundColor: '#9a1092', color: 'white', padding: '100px', borderRadius: '25px', border: '2px solid #ffffff', textAlign: 'center', fontSize: '16px', display: 'inline-block' }}>
          <div className="popup-inner" style={{ padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
            <h3>Add New Book</h3>
            <input
              type="text"
              placeholder="Enter title"
              value={newTitle}
              onChange={handleTitleChange}
              style={{ marginRight: '10px' }}
            />
            <button onClick={handleAddClick} style={{ marginRight: '10px' }}> Add</button>
            <button onClick={closePopup}> Cancel</button>
          </div>
        </div>
      )}

      <h2 style={{ color: 'white' }}> List Of Books </h2>
      <button onClick={openPopup} style={{ background: '#3498db', borderRadius: '28px', fontFamily: 'Arial', color: '#ffffff', fontSize: '20px', padding: '10px 20px 10px 20px', textDecoration: 'none' }}>+</button>
      {errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th style={{ color: 'white' }}>ID</th>
              <th style={{ color: 'white' }}>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td style={{ color: 'white' }}>{post.id}</td>
                <td style={{ color: 'white' }}>{post.title}</td>
                <td>
                  <button
                    onClick={() => handleButtonClick(post.id)} style={{ width: '30px', height: '30px', borderRadius: '20px', fontWeight: 'bold', border: '1px solid black' }}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Data;
