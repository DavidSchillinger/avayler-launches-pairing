import { useEffect, useState } from 'react';
import { Launch } from '../types/Launch';

export function Launches() {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    // TODO: Error and loading states.
    fetchLaunches().then(setLaunches);
  }, []);

  return (
    <article>
      {launches.map((launch) => (
        <div key={launch.id} data-test="launch-card">
          <h4>{launch.name}</h4>
          <p>{launch.date_utc}</p>
          <p>{launch.cores[0].core}</p>

          <div data-test="payloads">
            {launch.payloads.map((payload) => (
              <p key={payload.id}>
                {payload.id} {payload.type}
              </p>
            ))}
          </div>

          <a href={launch.links.patch.small}>{launch.links.patch.small}</a>

          <p>{launch.success ? 'Succeeded' : 'Failed'}</p>
        </div>
      ))}
    </article>
  );
}

function fetchLaunches(): Promise<Launch[]> {
  const headers = new Headers({ 'Content-Type': 'application/json' });

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
