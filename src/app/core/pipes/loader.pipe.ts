import { Observable, of, pipe, UnaryFunction } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { LoaderService } from '../services/loader/loader.service';

function startWithTap<T>(callback: () => void) {
  return (source: Observable<T>) =>
    of({}).pipe(tap(callback), switchMap((o) => source));
}

export function showLoader<T>(loader: LoaderService): UnaryFunction<Observable<T>, Observable<T>> {
    return pipe(
      startWithTap(() => loader.show()),
      finalize(() => loader.hide()),
    );
}
