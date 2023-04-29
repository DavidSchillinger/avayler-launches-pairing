import { useEffect, useState } from 'react';
import { Launch } from '../types/Launch';
import { fetchLaunches } from './fetchLaunches';

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

          {!launch.success &&
            !!launch.failures.length &&
            launch.failures.map((failure, index) => <p key={index}>{failure.reason}</p>)}
        </div>
      ))}
    </article>
  );
}
