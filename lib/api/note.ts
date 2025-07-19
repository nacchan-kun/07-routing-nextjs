import axios from 'axios';
import type { Note } from '../../types/note';

const KEY = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export async function getNoteById(id: number): Promise<Note> {
  // Check if we have a valid API token
  if (!KEY || KEY === 'your_token_here') {
    throw new Error(
      'NEXT_PUBLIC_NOTEHUB_TOKEN is not configured. Please add your API token to .env.local'
    );
  }

  const response = await axios.get<Note>(`/notes/${id}`);
  return response.data;
}
