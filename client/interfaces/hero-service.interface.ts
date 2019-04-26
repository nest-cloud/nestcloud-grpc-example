import { Observable } from 'rxjs';
import { GetHeroRequest, GetHeroResponse, ListHeroResponse } from './hero.interface';

export interface HeroService {
    get(data: GetHeroRequest): Observable<GetHeroResponse>;

    list(data: any): Observable<ListHeroResponse>;
}
