// TODO: Compare with JSON schema to make sure this is correct!

export type Launch = {
  id: string;
  name: string;
  date_utc: string;
  cores: {
    core: string;
  }[];
  payloads: {
    id: string;
    type: string;
  }[];
  links: {
    patch: {
      small: string;
    };
  };
  success: boolean;
  failures: {
    reason: string;
  }[];
};
