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
    tags: [{id: 1.1, tag: 'henna'}, {id: 1.2, tag: 'beauty'}],
    address: 'Ras Al Hanut 33, Casablanca'
  },
  {
    id: '2',
    date: '2. September',
    day: 'Friday',
    title: 'Madrid Museum',
    img: 'http://localhost:5006/images/julie-kwak-t_64epomhIs-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: [{id: 2.1, tag: 'art'}, {id: 2.2, tag: 'Picasso'}, {id: 2.3, tag: 'Madrid'}, {id: 2.4, tag: 'Spain'}],
    address: 'Madrid'
  },
  {
    id: '3',
    date: '2. May',
    day: 'Thursday',
    title: 'Desert day',
    img: 'http://localhost:5006/images/keith-hardy-PP8Escz15d8-unsplash.jpg',
    text: 'Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates.',
    tags: [{id: 3.1, tag: 'Sahara'}, {id: 3.2, tag: 'Camels'}, {id: 3.3, tag: 'Caravan'}],
    address: 'Sahara'
  }]


describe('PostCard', () => {
    it('displays values from array', () => {
      render(
        <PostCard
        moments={testdata}/>
      );
  
      const id = screen.getByText(/3/i);
      const date = screen.getByText(/2. September/i);
      const day = screen.getByText(/Friday/i);
      const title = screen.getByText(/Desert day/i);
      const text = screen.getAllByText(/Quae asperiores quis, facilis ad expedita in perferendis commodi fugit cumque quod unde, ipsam tempora aliquam, qui corrupti recusandae! Recusandae, praesentium reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus cum labore praesentium nemo eum, ratione, consequuntur accusamus quaerat laboriosam, totam quod quos distinctio expedita aliquam ea sed minima voluptates./i);
      const tags = screen.getAllByText(/Madrid/i);
      const address = screen.getByText(/Ras Al Hanut 33, Casablanca/i);
      const displayedImage = document.querySelector("img");
  
  
      expect(id).toBeInTheDocument();
      expect(date).toBeInTheDocument();
      expect(day).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      // multple Elements (array)
      expect(text).toHaveLength(3);
      expect(tags).toHaveLength(3);
      expect(displayedImage.src).toContain("henna");
        })
      });