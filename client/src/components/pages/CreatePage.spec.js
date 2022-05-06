import React from "react";
import { render, screen } from '@testing-library/react';
import CreatePage from "../pages/CreatePage";
import { BrowserRouter } from 'react-router-dom';
import Date from '../Date';
import Months from '../Months';
import Days from '../Days';

describe('CreatePage', () => {
    it('renders three input fields and two buttons', () => {
      render(
      <BrowserRouter>
             <CreatePage /> 
      </BrowserRouter>
     );
  
      const titleInput = screen.getByLabelText(/Title/i);
      const addressInput = screen.getByLabelText(/Memorable Place:/i);
      const tagsInput = screen.getByLabelText(/Tag your Memory \(separate by Comma\):/i);
      const submitButton = screen.getByRole('button', { name: /Keep Memory/i });
      const cancelButton = screen.getByRole('button', { name: /Forget it/i });
  
      expect(titleInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
      expect(tagsInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(cancelButton).toBeInTheDocument();
    });
});
  
it('should correctly set default option for date which cannot be selected by the user (only placeholder)', () => {
    render(<Date />)
    const selectDate = screen.getByRole('option', { name: 'Date' }).selected;

    expect(selectDate).toBe(false)
  })

  it('should correctly set default option for month which cannot be selected by the user (only placeholder)', () => {
    render(<Months />)
    const selectMonth = screen.getByRole('option', { name: 'Month' }).selected;

    expect(selectMonth).toBe(false)
  })

  it('should correctly set default option for day which cannot be selected by the user (only placeholder)', () => {
    render(<Days />)
    const selectDay = screen.getByRole('option', { name: 'Day' }).selected;

    expect(selectDay).toBe(false)
  })
  