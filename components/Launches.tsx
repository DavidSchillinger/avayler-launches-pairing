import { mockLaunches } from '../mocks/launch';

const launches = mockLaunches({ count: 10 });

export function Launches() {
  return (
    <article>
      {launches.map((launch) => (
        <div key={launch.id} data-test="launch-card">
          <h4>{launch.name}</h4>
          <p>{launch.date_utc}</p>
        </div>
      ))}
    </article>
  );
}
