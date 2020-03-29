import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request interceptor
    let clonedRequest;
    if (req.url.includes('products')) {
      clonedRequest = req.clone({
        params: new HttpParams()
          .set('ts_interceptor', Date.now().toString())
        // clear the body
        // body: null
      });
      // console.log(clonedRequest);
    } else {
      clonedRequest = req;
    }
    const start = performance.now();

    return next.handle(clonedRequest).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response), // only responses
      map((event: HttpResponse<any>) => {
        const seconds = (performance.now() - start) / 1000;
        console.log('Request took ' + seconds + ' s');
        // do stuff with response
        // if (event.url.includes('products')) {
        //   console.log('Response Interceptor:');
        //   console.log(event);
        //   console.log(event.body);
        // }
        return event;
      })
    );

  }
}
