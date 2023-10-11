'use client';

import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { getAllMonths } from '@/components/Shared/api';

export default async function HomePage() {
  const months = await getAllMonths();

  return (
    <div>
      <ColorSchemeToggle />
      <h1>Months</h1>
      <ul>
        {months.map((month) => (
          <li>
            {`${month.month} ${month.year}`}
            {/* <a href="/month"></a> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
