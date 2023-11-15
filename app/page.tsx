import Link from 'next/link';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { MonthsContext, MonthsDispatchContext, addMonthData } from '@/components/Shared/State';
import { getAllMonths } from '@/components/Shared/api';
import { NewMonth } from '@/components/NewMonth';

export default async function HomePage() {
  const months = await getAllMonths();
  const monthNames = months.map(month =>
    ({
      label: `${month.month} ${month.year}`,
      value: month.id,
    })
  ).sort();
  monthNames.unshift({ label: 'Select a month', value: '', disabled: true });

  return (
    <div>
      <ColorSchemeToggle />
      <h1>Months</h1>
      <ul>
        {months.map((month) => (
          <li key={month.id}>
            <Link
              href={`/month/${month.year}-${month.month}`}
            >{`${month.month} - ${month.year}`}
            </Link>
          </li>
        ))}
      </ul>
      <NewMonth data={monthNames} />
    </div>
  );
}
