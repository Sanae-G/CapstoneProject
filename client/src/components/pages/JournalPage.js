import { useEffect, useState } from 'react';
import JournalHeader from '../Header/JournalHeader';
import PostCard from '../PostCard/PostCard';
import Navbar from '../Navbar/Navbar';
import ScrollUpButton from '../ScrollUpButton';
import SearchInput from '../SearchInput';

function JournalPage() {
  let [moments, setMoments] = useState([]);
  let [filteredPosts, setFilteredPosts] = useState(moments);

  useEffect(() => {
    fetch('/posts')
      .then(res => res.json())
      .then(data => {
        setMoments(data);
        setFilteredPosts(data);
      });
  }, []);

  return (
    <>
      <JournalHeader />
      <PostCard
        moments={moments}
        setMoments={setMoments}
        filteredPosts={filteredPosts}
        setFilteredPosts={setFilteredPosts}
      />
      <ScrollUpButton />
      <SearchInput
        moments={moments}
        setMoments = {setMoments}
        filteredPosts={filteredPosts}
        setFilteredPosts={setFilteredPosts}
      />
      <Navbar />
    </>
  );
}

export default JournalPage;
