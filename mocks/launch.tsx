import { Launch } from '../api/launch';

export function mockLaunches({ count }: { count: number }) {
  return Array.from(Array(count)).map(mockLaunch);
}
export function mockLaunch(override?: Partial<Launch>): Launch {
  const id = uniqueId();

  return {
    id,
    name: 'Launch Name',
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
        type: 'Launch Payload Type',
        id: 'Launch Payload ID',
      },
    ],
    cores: [
      {
        core: 'Launch Core Serial',
      },
    ],
    ...override,
  };
}

let id = 0;
function uniqueId() {
  return id++ + '';
}
