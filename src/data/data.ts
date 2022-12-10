import type { Genre } from "./models";

export const Genres = [
  { name: "Comedy",         shortName: "Comedy",    value: "comedy" },
  { name: "Drama",          shortName: "Drama",     value: "drama" },
  { name: "Mystery",        shortName: "Mystery",   value: "mystery" },
  { name: "Adventure",      shortName: "Advent.",   value: "Adventure" },
  { name: "Romance",        shortName: "Rom.",      value: "romance" },
  { name: "LGBTQ+",         shortName: "LGBTQ6",    value: "lgbtq+" },
  { name: "Sci-Fi",         shortName: "SciFi",     value: "scifi" },
  { name: "Action",         shortName: "Action",    value: "action" },
  { name: "Fantasy",        shortName: "Fanta.",    value: "fantasy" },
  { name: "Sci-Fantasy",    shortName: "SciFan.",   value: "scifantasy" },
  { name: "BL",             shortName: "bl",        value: "bl" },
  { name: "Sclice-of-Life", shortName: "SoL",       value: "sliceoflife" },
  { name: "Western",        shortName: "Western",   value: "western" },
  { name: "Daily-Gags",     shortName: "D.Gags",    value: "dailygags" },
  { name: "Horror",         shortName: "Horror",    value: "horror" },
  { name: "Historical",     shortName: "History",   value: "history" },
] as Genre[];
