'use client';
import { useState } from 'react';

export default function CommentForm() {
  const [comment, setComment] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment }),
    });
    setComment('');
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        name="comment"
        placeholder="Write a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
