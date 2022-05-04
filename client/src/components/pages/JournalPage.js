import { useEffect, useState } from 'react';
import JournalHeader from '../Header/JournalHeader';
import PostCard from '../Postcard/PostCard';

function JournalPage() {
  let [moments, setMoments] = useState(null);

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
