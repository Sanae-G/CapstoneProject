import JournalHeader from '../components/Header/JournalHeader';

export default {
    title: 'JournalHeader',
    component: JournalHeader,
  };

const Template = (args) => <JournalHeader {...args}/>;

export const FirstStory = Template.bind({});

FirstStory.args = {
  color: '#FFD6BA',
  heading: 'Crazy Trip to Morocoo',
  period: '01.04 - 10.04.2022',
}
