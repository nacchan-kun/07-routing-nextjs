import axios from 'axios';
import type { Note } from '../../types/note';

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: string;
}

export async function createNote({
  title,
  content,
  tag,
}: CreateNoteParams): Promise<Note> {
  const response = await axios.post<Note>('/notes', {
    title,
    content,
    tag,
  });
  return response.data;
}

export async function deleteNote(id: number): Promise<Note> {
  const response = await axios.delete<Note>(`/notes/${id}`);
  return response.data;
}
