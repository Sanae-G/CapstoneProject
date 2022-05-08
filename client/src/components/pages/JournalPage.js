import { useEffect, useState } from 'react';
import JournalHeader from '../Header/JournalHeader';
import PostCard from '../PostCard/PostCard';
import Navbar from '../Navbar/Navbar';

function JournalPage() {
  let [moments, setMoments] = useState([]);

  useEffect(() => {
    fetch('/posts')
      .then(res => res.json())
      .then(data => setMoments(data));
  }, []);

  return (
    <>
      <JournalHeader />
      <PostCard moments={moments} />
      <Navbar />
    </>
  );
}

export default JournalPage;
