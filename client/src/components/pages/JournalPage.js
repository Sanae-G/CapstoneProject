import { useEffect, useState } from 'react';
import JournalHeader from '../Header/JournalHeader';
import PostCard from '../Postcard/PostCard';
import Navbar from '../Navbar/Navbar';

function JournalPage() {
  let [moments, setMoments] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMoments(data));
  }, [])



  return (
      <>
      <JournalHeader />
      <PostCard moments = {moments}/>
      <Navbar />
      </>
  );
}

export default JournalPage;
