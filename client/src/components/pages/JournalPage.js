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
    // <div className="App">
    //   <h1>Moments</h1>
    //   <ul>
    //     {moments && moments.map((moment) =>
    //       <li key={moment.id}>{moment.title}</li>
    //     )}
    //   </ul>
    // </div>
  );
}

export default JournalPage;
