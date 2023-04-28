export function mockLaunches({ count }: { count: number }) {
  return Array.from(Array(count)).map(mockLaunch);
}
export function mockLaunch() {
  const id = uniqueId();

  return {
    id,
    name: 'Launch ' + id,
    date_utc: '2000-10-20T20:30:00.000Z',
    links: {
      patch: {
        small: 'path/to/image.png',
      },
    },
    success: true,
    failures: [],
    payloads: [
      {
        type: 'Satellite',
        id: '5eb0e4b5b6c3bb0006eeb1e1',
      },
    ],
    cores: [
      {
        core: 'Launch Core Serial',
      },
    ],
  };
}

let id = 0;
function uniqueId() {
  return id++ + '';
}
