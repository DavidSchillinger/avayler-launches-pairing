type Core = {
  core: string;
};

type Payload = {
  id: string;
  type: string;
};

type Links = {
  patch: {
    small: string;
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
  success: boolean;
  failures: Failure[];
};
