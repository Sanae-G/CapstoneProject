import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      date: '2. April',
      day: 'Thursday',
      title: 'My Henna Tattoo',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tag1: 'henna',
      tag2: 'beauty',
      tag3: 'tattoo',
      address: 'Ras Al Hanut 33, Casablanca'
    },
    {
      id: 2,
      date: '2. September',
      day: 'Friday',
      title: 'Madrid Museum',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tag1: 'art',
      tag2: 'Picasso',
      tag3: 'Madrid',
      address: 'Madrid'
    },
    {
      id: 3,
      date: '2. May',
      day: 'Thursday',
      title: 'Desert day',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tag1: 'Sahara',
      tag2: 'Camels',
      tag3: 'Caravan',
      address: 'Sahara'
    },
    {
      id: 4,
      date: '2. July',
      day: 'Tuesday',
      title: 'Movie Park',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tag1: 'entertainment',
      tag2: 'Park',
      tag3: 'Spongebob',
      address: 'Movie Park, Bottrop'
    },
    {
      id: 5,
      date: '31. October',
      day: 'Monday',
      title: 'Halloween Party at my House',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tag1: 'party',
      tag2: 'games',
      tag3: 'friends',
      address: 'My Home'
    }
  ]);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

export default router;
