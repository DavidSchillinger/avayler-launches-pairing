import { useEffect, useState } from 'react';
import { fetchLaunches, Launch } from '../api/launch';
import classes from './Launches.module.css';

export function Launches() {
  const state = useLaunches();

  switch (state.status) {
    case 'pending':
      return <article className={classes.container}>Loading launches...</article>;
    case 'rejected':
      return <article className={classes.container}>Error loading launches.</article>;
    case 'fulfilled':
      return (
        <article className={classes.container}>
          {state.launches.map((launch) => (
            <div key={launch.id}>
              <div data-test="launch-card" className={classes.card}>
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
            </div>
          ))}
        </article>
      );
  }
}

// Very basic and naive fetch hook.
// Consider using a more flexible library instead, e.g. "swr"
function useLaunches() {
  type Pending = { status: 'pending' };
  type Fulfilled = { status: 'fulfilled'; launches: Launch[] };
  type Rejected = { status: 'rejected'; error: unknown };
  type State = Pending | Fulfilled | Rejected;

  const [state, setState] = useState<State>({ status: 'pending' });

  useEffect(() => {
    fetchLaunches()
      .then((launches) => {
        setState({ status: 'fulfilled', launches });
      })
      .catch((error) => {
        setState({ status: 'rejected', error });
      });
  }, []);

  return state;
}
