import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      date: '2. April',
      day: 'Thursday',
      title: 'My Henna Tattoo',
      img: 'http://localhost:5006/images/henna.png',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tags: [{id: 1.1, tag: 'henna'}, {id: 1.2, tag: 'beauty'}],
      address: 'Ras Al Hanut 33, Casablanca'
    },
    {
      id: 2,
      date: '2. September',
      day: 'Friday',
      title: 'Madrid Museum',
      img: 'http://localhost:5006/images/julie-kwak-t_64epomhIs-unsplash.jpg',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tags: [{id: 2.1, tag: 'art'}, {id: 2.2, tag: 'Picasso'}, {id: 2.3, tag: 'Madrid'}, {id: 2.4, tag: 'Spain'}],
      address: 'Madrid'
    },
    {
      id: 3,
      date: '2. May',
      day: 'Thursday',
      title: 'Desert day',
      img: 'http://localhost:5006/images/keith-hardy-PP8Escz15d8-unsplash.jpg',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tags: [{id: 3.1, tag: 'Sahara'}, {id: 3.2, tag: 'Camels'}, {id: 3.3, tag: 'Caravan'}],
      address: 'Sahara'
    },
    {
      id: 4,
      date: '2. July',
      day: 'Tuesday',
      title: 'Movie Park',
      img: 'http://localhost:5006/images/karussel.jpg',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tags: [{id: 4.1, tag: 'entertainment'}, {id: 4.2, tag: 'Park'}, {id: 4.3, tag: 'Spongebob'}],
      address: 'Movie Park, Bottrop'
    },
    {
      id: 5,
      date: '31. October',
      day: 'Monday',
      title: 'Halloween Party at my House',
      img: 'http://localhost:5006/images/paige-cody-nHxG9tP2ElE-unsplash.jpg',
      text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
      tags: [{id: 5.1, tag: 'party'}, {id: 5.2, tag: 'games'}, {id: 5.3, tag: 'friends'}],
      address: 'My Home'
    }
  ]);
});

router.post("/", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;

  const newPost = Post({ title: title, text: text});
  
  newPost
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

export default router;
