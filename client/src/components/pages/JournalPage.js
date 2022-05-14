import { useEffect, useState } from 'react';
import JournalHeader from '../Header/JournalHeader';
import PostCard from '../PostCard/PostCard';
import Navbar from '../Navbar/Navbar';
import ScrollUpButton from '../ScrollUpButton';
import SearchInput from '../SearchInput';
import SortButton from '../SortButton';

function JournalPage() {
  let [moments, setMoments] = useState([]);
  let [filteredPosts, setFilteredPosts] = useState(moments);
  const [chronological, setChronological] = useState(true);

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
      <SortButton chronological={chronological} setChronological={setChronological} />
      <PostCard
        moments={moments}
        setMoments={setMoments}
        filteredPosts={filteredPosts}
        setFilteredPosts={setFilteredPosts}
        chronological={chronological}
        setChronological={setChronological}
      />
      <ScrollUpButton />
      <SearchInput
        moments={moments}
        setMoments={setMoments}
        filteredPosts={filteredPosts}
        setFilteredPosts={setFilteredPosts}
      />
      <Navbar />
    </>
  );
}

export default JournalPage;
