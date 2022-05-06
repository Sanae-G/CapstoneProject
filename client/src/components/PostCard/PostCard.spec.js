// user.test.js
import React from "react";
import { render, screen } from '@testing-library/react';
import PostCard from "../Postcard/PostCard";

const testdata = [
  {
    id: '1',
    date: '2. April',
    day: 'Thursday',
    title: 'My Henna Tattoo',
    img: 'http://localhost:5006/images/henna.png',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['henna', 'beauty'],
    address: 'Ras Al Hanut 33, Casablanca'
  },
  {
    id: '2',
    date: '2. September',
    day: 'Friday',
    title: 'Madrid Museum',
    img: 'http://localhost:5006/images/julie-kwak-t_64epomhIs-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['art', 'Picasso', 'Madrid', 'Spain'],
    address: 'Madrid'
  },
  {
    id: '3',
    date: '2. May',
    day: 'Thursday',
    title: 'Desert day',
    img: 'http://localhost:5006/images/keith-hardy-PP8Escz15d8-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: ['Sahara', 'Camels', 'Caravan'],
    address: 'Sahara'
  }]


describe('PostCard', () => {
    it('displays values from array', () => {
      render(
        <PostCard
        moments={testdata}/>
      );
  
      const date = screen.getByRole('heading', { level: 2, name: /2. September/i });
      const day = screen.getByText(/Friday/i);
      const title = screen.getByRole('heading', { level: 3, name: /Desert day/i });
      const text = screen.getAllByText(/Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates./i);
      const textMadrid = screen.getAllByText(/Madrid/i);
      const address = screen.getByText(/Ras Al Hanut 33, Casablanca/i);
      const displayedImage = document.querySelector("img");
      const img = screen.getAllByRole('img', { name: /moment/i });
      const titleMadrid = screen.getByRole('heading', { level: 3, name: /Madrid/i });
  
  
      expect(date).toBeInTheDocument();
      expect(day).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(titleMadrid).toBeInTheDocument();
      expect(textMadrid).toHaveLength(3);
      expect(address).toBeInTheDocument();
      expect(text).toHaveLength(3);
      expect(displayedImage.src).toContain(".png");
      expect(img).toHaveLength(3);
        })
      });