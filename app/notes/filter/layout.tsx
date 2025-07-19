import { ReactNode } from 'react';

interface FilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function FilterLayout({ children, sidebar }: FilterLayoutProps) {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <aside style={{ minWidth: '200px' }}>
        {sidebar}
      </aside>
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}
