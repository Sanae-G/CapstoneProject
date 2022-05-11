import React from 'react';
import { render, screen } from '@testing-library/react';
import CreatePage from '../pages/CreatePage';
import { BrowserRouter } from 'react-router-dom';
import Date from '../Date';
import Months from '../Months';
import Days from '../Days';
import userEvent from '@testing-library/user-event';

describe('CreatePage', () => {
  it('renders four input fields and two buttons', () => {
    render(
      <BrowserRouter>
        <CreatePage />
      </BrowserRouter>
    );

    const titleInput = screen.getByLabelText(/Title/i);
    const addressInput = screen.getByLabelText(/Memorable Place:/i);
    const tagsInput = screen.getByLabelText(/Tag your Memory \(separate by Comma\):/i);
    const textInput = screen.getByLabelText(/My memorable Travel Experience:/i);
    const submitButton = screen.getByRole('button', { name: /Keep Memory/i });
    const cancelButton = screen.getByRole('button', { name: /Forget it/i });

    expect(titleInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(tagsInput).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('does not submit form if one of the required input fields is left empty', () => {
    const handleSubmit = jest.fn();
    render(
      <BrowserRouter>
        <CreatePage />
      </BrowserRouter>
    );

    const titleInput = screen.getByLabelText(/Title/i);
    const submitButton = screen.getByRole('button', { name: /Keep Memory/i });

    userEvent.type(titleInput, 'MyTravelMemory');
    userEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('submits form if all of the required input fields is filled', () => {
    const handleCreate = jest.fn();
    render(
      <BrowserRouter>
        <CreatePage />
      </BrowserRouter>
    );

    const titleInput = screen.getByLabelText(/Title/i);
    const textInput = screen.getByLabelText(/My memorable Travel Experience:/i);
    const selectDate = screen.getByRole('option', { name: '3rd' });
    const selectMonth = screen.getByRole('option', { name: 'February' });
    const selectDay = screen.getByRole('option', { name: 'Friday' });
    const submitButton = screen.getByRole('button', { name: /Keep Memory/i });

    userEvent.type(titleInput, 'My Travel Memory');
    userEvent.type(textInput, 'Whatever...');
    userEvent.type(selectDate, '3rd');
    userEvent.type(selectMonth, 'February');
    userEvent.type(selectDay, 'Friday');
    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledWith({
      day: 'Friday',
      title: 'My Travel Memory',
      text: 'Whatever...',
      date: '3rd',
      month: 'February',
      address: '',
      tags: '',
    });
  });
});

describe('Date', () => {
  it('should correctly set default option for date which cannot be selected by the user (only placeholder)', () => {
    render(<Date />);

    const selectDate = screen.getByRole('option', { name: 'Date' }).selected;

    expect(selectDate).toBe(false);
  });

  it('should display the correct number of options', () => {
    render(<Date />);

    const numberOfOptions = screen.getAllByRole('option').length;

    expect(numberOfOptions).toBe(32);
  });
});

describe('Months', () => {
  it('should correctly set default option for month which cannot be selected by the user (only placeholder)', () => {
    render(<Months />);
    const selectMonth = screen.getByRole('option', { name: 'Month' }).selected;

    expect(selectMonth).toBe(false);
  });

  it('should display the correct number of options', () => {
    render(<Months />);

    const numberOfOptions = screen.getAllByRole('option').length;

    expect(numberOfOptions).toBe(13);
  });
});

describe('Days', () => {
  it('should correctly set default option for day which cannot be selected by the user (only placeholder)', () => {
    render(<Days />);
    const selectDay = screen.getByRole('option', { name: 'Day' }).selected;

    expect(selectDay).toBe(false);
  });

  it('should display the correct number of options', () => {
    render(<Days />);

    const numberOfOptions = screen.getAllByRole('option').length;

    expect(numberOfOptions).toBe(8);
  });
});
