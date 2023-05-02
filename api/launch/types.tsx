// See https://github.com/r-spacex/SpaceX-API/blob/master/docs/launches/v5/schema.md

type Core = {
  core: string | null;
};

type Payload = {
  id: string;
  type: string | null;
};

type Links = {
  patch: {
    small: string | null;
  };
};

type Failure = {
  reason: string;
};

export type Launch = {
  id: string;
  name: string;
  date_utc: string;
  cores: Core[];
  payloads: Payload[];
  links: Links;
  success: boolean | null;
  failures: Failure[];
};
