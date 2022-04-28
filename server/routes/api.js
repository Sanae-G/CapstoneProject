import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      title: 'Summertime in Madrid',
      text: 'Lorem ipsum dolor sit.'
    },
    {
      id: 2,
      title: 'Madrid Museum',
      text: 'Lorem ipsum dolor sit.'
    },
    {
      id: 3,
      title: 'beach corner',
      text: 'Lorem ipsum dolor sit.'
    },
    {
      id: 4,
      title: 'sun bathing',
      text: 'Lorem ipsum dolor sit.'
    },
    {
      id: 5,
      title: 'festival',
      text: 'Lorem ipsum dolor sit.'
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
