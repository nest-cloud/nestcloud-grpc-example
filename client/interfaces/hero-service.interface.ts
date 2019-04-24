import { Observable } from 'rxjs';

export interface HeroService {
    findOne(data: { id: number }): Observable<any>;
}
