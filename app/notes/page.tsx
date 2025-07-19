import { fetchNotes } from '@/lib/api';
import NoteClient from './Notes.client';

const Notes = async () => {
  try {
    const response = await fetchNotes({});
    return (
      <section>
        <NoteClient notes={response.notes} totalPages={response.totalPages} />
      </section>
    );
  } catch (error) {
    console.error('Failed to fetch notes:', error);
    
    // During build time, if API fails, show a fallback with empty data
    // This allows the build to complete successfully
    return (
      <section>
        <NoteClient notes={[]} totalPages={1} />
      </section>
    );
  }
};

export default Notes;