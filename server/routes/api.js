import express from 'express';
const router = express.Router();

const db = [
  {
    id: 1,
    date: '2. April',
    day: 'Thursday',
    title: 'My Henna Tattoo',
    img: 'http://localhost:5006/images/henna.png',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['henna', 'beauty'],
    address: 'Ras Al Hanut 33, Casablanca'
  },
  {
    id: 2,
    date: '2. September',
    day: 'Friday',
    title: 'Madrid Museum',
    img: 'http://localhost:5006/images/julie-kwak-t_64epomhIs-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['art', 'Picasso', 'Madrid', 'Spain'],
    address: 'Madrid'
  },
  {
    id: 3,
    date: '2. May',
    day: 'Thursday',
    title: 'Desert day',
    img: 'http://localhost:5006/images/keith-hardy-PP8Escz15d8-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['Sahara', 'Camels', 'Caravan'],
    address: 'Sahara'
  },
  {
    id: 4,
    date: '2. July',
    day: 'Tuesday',
    title: 'Movie Park',
    img: 'http://localhost:5006/images/karussel.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['entertainment', 'Park', 'Spongebob'],
    address: 'Movie Park, Bottrop'
  },
  {
    id: 5,
    date: '31. October',
    day: 'Monday',
    title: 'Halloween Party at my House',
    img: 'http://localhost:5006/images/paige-cody-nHxG9tP2ElE-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['party', 'games', 'friends'],
    address: 'My Home'
  },
  {
    id: 6,
    title: 'Halloween Party at my House',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
  }
];

router.get('/', (req, res, next) => {
  res.status(200).json(db);
});

router.post('/', (req, res) => {
  try {
    const title = req.body.title;
    const text = req.body.text;
    const date = req.body.date;
    const day = req.body.day;
    const month = req.body.month;
    const address = req.body.address;
    const tags = req.body.tags;

    const newPost = {
      id: db.length + 1,
      date: month + ' ' + date,
      day: day,
      title: title,
      img: '',
      text: text,
      tags: tags.split(','),
      address: address,
    };

    db.push(newPost);
    res.status(201).send('Object pushed successfully!');
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong!', error: error.message });
  }
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

export default router;
