import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from '@tanstack/react-query';
import { getNoteById } from '@/lib/api/note';
import NoteDetailsClient from './NoteDetails.client';

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: ['note', id],
      queryFn: () => getNoteById(Number(id)),
    });
  } catch (error) {
    console.error(`Failed to prefetch note ${id}:`, error);
    // During build time, if API fails, continue without prefetching
    // The client component will handle the error state
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
};

export default NoteDetails;