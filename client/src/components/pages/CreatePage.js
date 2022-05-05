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
    const url = '';
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const post = {title, text};

        fetch('http://localhost:5006/api')
    }

    function handleClick(){

        navigate("/");
    }
 
    return (
        <>
        <h1>CreatePage</h1>
        <button onClick={handleClick}>Go back to Homepage</button>
        
        </>
    );
  }
  
  export default CreatePage;