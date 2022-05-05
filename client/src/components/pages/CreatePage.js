import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// id: 1,
//       date: '2. April',
//       day: 'Thursday',
//       title: 'My Henna Tattoo',
//       img: 'http://localhost:5006/images/henna.png',
//       text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
//       tags: [{id: 1.1, tag: 'henna'}, {id: 1.2, tag: 'beauty'}],
//       address: 'Ras Al Hanut 33, Casablanca'

function CreatePage() {

    const navigate = useNavigate();
    const url = '/api';
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const post = {title, text};

        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        }).then(() => {
            console.log('add new post');
        })
    }

    function handleClick(){

        navigate("/");
    }
 
    return (
        <>
        <h1>Add a New Page!</h1>
        <button onClick={handleClick}>Go back to Homepage</button>
        
        <div>
            <h1>Add a new Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type='text' 
                required value={title} 
                onChange={(e) => setTitle(e.target.value)}>
                </input>
                <label>Blog post:</label>
               <textarea required
               value={text} 
               onChange={(e) => setText(e.target.value)}>
               </textarea>
               <button>Add Page</button>
               <p>{title}</p>
               <p>{text}</p>
            </form>
        </div>
        </>
    );
  }
  
  export default CreatePage;