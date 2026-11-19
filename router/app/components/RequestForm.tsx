'use client';

import { useActionState } from 'react';
import { submitRequest } from '../actions';

const initialState = {
  success: false,
  message: '',
};

export default function RequestForm() {
  const [state, formAction, pending] = useActionState(
    submitRequest,
    initialState
  );

  return (
    <form action={formAction} className="request-form">
      <label htmlFor="name">Ваше ім'я</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Введіть ім'я"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        required
      />

      <label htmlFor="book">Назва книги</label>
      <input
        id="book"
        name="book"
        type="text"
        placeholder="Яку книгу шукаєте?"
        required
      />

      <button type="submit" className="button" disabled={pending}>
        {pending ? 'Надсилання...' : 'Надіслати заявку'}
      </button>

      {state.message && (
        <p className={state.success ? 'success' : 'error-message'}>
          {state.message}
        </p>
      )}
    </form>
  );
}