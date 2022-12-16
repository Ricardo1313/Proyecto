import react, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"Ricardo_López",
      caption:"Esta es mi universidad",
      imageUrl:"http://www.utp.edu.pe/2020/sites/default/files/styles/como-llegar/public/aqp-version-actualizada.jpg?itok=mudbZWua"
    },
    {
      username:"Ricardo_López",
      caption:"Esta es mi universidad",
      imageUrl:"http://www.utp.edu.pe/2020/sites/default/files/styles/como-llegar/public/aqp-version-actualizada.jpg?itok=mudbZWua"
    }
  ]);
  return (
    <div className="App">
      <div className='app__header'>
        <img
        className='app__headerImagene'
        src='https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png'
        alt=''
        />
      </div>

      <h1>Hola este es mi proyecto para el curso de TIC</h1>
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
