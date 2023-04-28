import { mockLaunch } from '../mocks/launch';

const launches = [mockLaunch()];

export function Launches() {
  return (
    <article>
      {launches.map((launch) => (
        <div key={launch.id} data-test="launch-card">
          <h4>{launch.name}</h4>
          <p>{launch.date_utc}</p>
          <p>{launch.cores[0].core}</p>
        </div>
      ))}
    </article>
  );
}
