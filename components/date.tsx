import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>;
}

export function formatDateString(dateString: string) {
  const date = parseISO(dateString);
  return format(date, 'LLL d, yyyy');
}