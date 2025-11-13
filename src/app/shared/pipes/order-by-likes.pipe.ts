import { Pipe, PipeTransform } from '@angular/core';
import { Eventy } from '../../model/eventy';

@Pipe({
  name: 'orderByLikes',
  pure: true
})
export class OrderByLikesPipe implements PipeTransform {

  transform(events: Eventy[] | null): Eventy[] {
    if (!events || events.length === 0) {
      return [];
    }

    return [...events]
      .sort((a, b) => b.nbrLike - a.nbrLike)
      .slice(0, 3);
  }

}
