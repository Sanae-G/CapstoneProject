import { useEffect, useState } from 'react';
import JournalHeader from '../Header/JournalHeader';
import PostCard from '../PostCard/PostCard';

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
      </>
  );
}

export default JournalPage;
