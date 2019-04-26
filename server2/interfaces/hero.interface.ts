export interface Hero {
  id: number;
  name: string;
}

export interface GetHeroRequest {
  id: number;
}

export interface GetHeroResponse {
  hero: Hero;
}

export interface ListHeroResponse {
  heros: Hero[];
}
