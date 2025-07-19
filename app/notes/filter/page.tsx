import { fetchNotes } from '@/lib/api/notes';
import NotesClient from '../Notes.client';

const FilterPage = async () => {
  try {
    const response = await fetchNotes({});
    return (
      <section>
        <h1>All Notes</h1>
        <NotesClient notes={response.notes} totalPages={response.totalPages} />
      </section>
    );
  } catch (error) {
    console.error('Failed to fetch notes:', error);
    
    return (
      <section>
        <h1>All Notes</h1>
        <NotesClient notes={[]} totalPages={1} />
      </section>
    );
  }
};

export default FilterPage;
