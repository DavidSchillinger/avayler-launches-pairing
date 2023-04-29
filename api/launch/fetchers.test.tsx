import { jest, expect } from '@jest/globals';
import { fetchLaunches } from './fetchers';

const fetchSpy = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ docs: ['foobar'] }) } as Response));
global.fetch = fetchSpy;

describe('fetchLaunchers', () => {
  it('should POST to v5/launches/query', async () => {
    await fetchLaunches();

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenLastCalledWith(
      expect.stringContaining('v5/launches/query'),
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('options'),
      })
    );
  });

  it('should resolve the "docs" from the return body', async () => {
    const result = await fetchLaunches();

    expect(result).toEqual(['foobar']);
  });

  it('should not swallow fetch errors', async () => {
    fetchSpy.mockRejectedValue('ERROR');

    await expect(fetchLaunches()).rejects.toEqual('ERROR');
  });
});
