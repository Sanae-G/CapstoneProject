import { useEffect, useState } from 'react';
import JournalHeader from '../Header/JournalHeader';
import PostCard from '../PostCard/PostCard';
import Navbar from '../Navbar/Navbar';
import ScrollUpButton from '../ScrollUpButton';
import SearchInput from '../SearchInput';

function JournalPage() {
  let [moments, setMoments] = useState([]);
  let [filteredPosts, setFilteredPosts] = useState(moments);
  const [chronological, setChronological] = useState(true);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('https://capstone-sg.herokuapp.com/api/posts')
      .then(res => res.json())
      .then(data => {
        setMoments(data);
        setFilteredPosts(data);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      <JournalHeader />
      <SearchInput
        moments={moments}
        setMoments={setMoments}
        filteredPosts={filteredPosts}
        setFilteredPosts={setFilteredPosts}
      />
      <PostCard
        isPending={isPending}
        moments={moments}
        setMoments={setMoments}
        filteredPosts={filteredPosts}
        setFilteredPosts={setFilteredPosts}
        chronological={chronological}
        setChronological={setChronological}
      />
      <ScrollUpButton />
      <Navbar chronological={chronological} setChronological={setChronological} />
    </>
  );
}

export default JournalPage;
