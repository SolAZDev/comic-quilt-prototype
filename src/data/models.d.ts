export interface Genre {
  value: string;
  name: string;
  shortName: string;
}

export interface Comic {
  name: string;
  url: string;
  rss: string;
  genre: string[];
  syopsis: string;
  patreon: string;
  store: string;
  kofi: string;
  sfw: boolean;
  collective: boolean;
}
