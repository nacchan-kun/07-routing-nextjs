import Link from 'next/link';
import css from './SidebarNotes.module.css';

export default function SidebarNotes() {
  const tags = ['All', 'Work', 'Todo', 'Personal', 'Meeting', 'Shopping'];

  return (
    <aside>
      <ul className={css.menuList}>
        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link 
              href={`/notes/filter/${tag}`} 
              className={css.menuLink}
            >
              {tag === 'All' ? 'All Notes' : tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
