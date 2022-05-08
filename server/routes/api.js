import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();


const db = [
  {
    id: uuidv4(),
    date: 'April 2nd',
    day: 'Thursday',
    title: 'My Henna Tattoo',
    img: 'http://localhost:5007/images/henna.png',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['henna', 'beauty'],
    address: 'Ras Al Hanut 33, Casablanca'
  },
  {
    id: uuidv4(),
    date: 'September 3rd',
    day: 'Friday',
    title: 'Madrid Museum',
    img: 'http://localhost:5007/images/julie-kwak-t_64epomhIs-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['art', 'Picasso', 'Madrid', 'Spain'],
    address: 'Madrid'
  },
  {
    id: uuidv4(),
    date: 'May 15th',
    day: 'Thursday',
    title: 'Desert day',
    img: 'http://localhost:5007/images/keith-hardy-PP8Escz15d8-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['Sahara', 'Camels', 'Caravan'],
    address: 'Sahara'
  },
  {
    id: uuidv4(),
    date: 'July 6th',
    day: 'Tuesday',
    title: 'Movie Park',
    img: 'http://localhost:5007/images/karussel.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['entertainment', 'Park', 'Spongebob'],
    address: 'Movie Park, Bottrop'
  },
  {
    id: uuidv4(),
    date: 'October 31st',
    day: 'Monday',
    title: 'Halloween Party at my House',
    img: 'http://localhost:5007/images/paige-cody-nHxG9tP2ElE-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['party', 'games', 'friends'],
    address: 'My Home'
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
      id: uuidv4(),
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


router.get('/:id', (req, res) => {
  const { id } = req.params.id;

try {
  const selectedObject = db.find((object) => object.id === id);
  res.status(200).send(selectedObject);
} catch (error) {
  res.status(400).json({ message: 'Something went wrong!', error: error.message });
}
});


// router.delete('/:id', (req, res) => {
//   try {
//     const id = req.params.id;
    
//     db = db.filter((object) => {
//       object.id !== id
//     });
//     res.status(200).send('Object deleted successfully!');
//   } catch (error) {
//     res.status(400).json({ message: 'Something went wrong!', error: error.message });
//   }
// });

router.patch("/:id", (req, res) => {
  try {
  const id = req.params.id;

  const selectedObject = db.find((object) => object.id === id);
  
  selectedObject.title = req.body.title;
  selectedObject.text = req.body.text;
  selectedObject.date = req.body.date;
  selectedObject.day = req.body.day;
  selectedObject.month = req.body.month;
  selectedObject.address = req.body.address;
  selectedObject.tags = req.body.tags;

  res.status(200).send('Object updated successfully!');
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong!', error: error.message });
  }
});

export default router;
