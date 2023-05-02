import { Launch } from './types';

export function fetchLaunches(): Promise<Launch[]> {
  const headers = { 'Content-Type': 'application/json' };

  const body = JSON.stringify({
    query: {},
    options: {
      offset: 0,
      limit: 10,
      page: 1,
      select: ['id', 'name', 'date_utc', 'cores.core', 'payloads', 'links.patch.small', 'success', 'failures.reason'],
      populate: [
        {
          path: 'payloads',
          select: ['id', 'type'],
        },
      ],
    },
  });

  return fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers,
    body,
  })
    .then((response) => response.json())
    .then((json) => json.docs);
}
