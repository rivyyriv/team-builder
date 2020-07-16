import React from 'react';
import { render } from '@testing-library/react';
import NoteForm from './NoteForm';

test('renders learn react link', () => {
  const { getByText } = render(<NoteForm />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
