import PostCard from '../components/Postcard/PostCard';

export default {
    title: 'PostCard',
    component: PostCard,
  };

const Template = (args) => <PostCard {...args}/>;

export const SecondStory = Template.bind({});

SecondStory.args = {
  color: '#FFD6BA',
  heading: 'Crazy Trip to Morocoo',
  period: '01.04 - 10.04.2022',
}