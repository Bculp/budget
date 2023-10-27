import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { MonthsContext, MonthsDispatchContext, addMonthData } from '@/components/Shared/State';
import { getAllMonths } from '@/components/Shared/api';
import { Button } from '@mantine/core';
import Link from 'next/link';

export default async function HomePage() {
  const months = await getAllMonths();

  // addMonthData(months);

  return (
    <div>
      <ColorSchemeToggle />
      <h1>Months</h1>
      <ul>
        {months.map((month) => (
          <li>
            <Link
              href={`/month/${month.year}-${month.month}`}
            >{`${month.month} - ${month.year}`}</Link>
          </li>
        ))}
      </ul>
      <Button component="a" href="/month">
        Add Month
      </Button>
    </div>
  );
}
