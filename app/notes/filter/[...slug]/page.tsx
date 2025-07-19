import { fetchNotes } from '@/lib/api/notes';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const FilteredNotes = async ({ params }: Props) => {
  const { slug } = await params;
  
  // Extract the tag from the slug array
  const tag = slug?.[0] || '';
  
  try {
    const response = await fetchNotes({ tag });
    return (
      <section>
        <h1>Notes filtered by: {tag}</h1>
        <NotesClient initialData={response} tag={tag} />
      </section>
    );
  } catch (error) {
    console.error('Failed to fetch filtered notes:', error);
    
    return (
      <section>
        <h1>Notes filtered by: {tag}</h1>
        <NotesClient initialData={{ notes: [], totalPages: 1 }} tag={tag} />
      </section>
    );
  }
};

export default FilteredNotes;
