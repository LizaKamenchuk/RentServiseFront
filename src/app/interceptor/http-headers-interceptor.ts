import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalStorageService} from "../localStorage-service/local-storage.service";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let bearerToken = this.localStorage.get('bearerToken');
      if (bearerToken !== null && req.headers.get('Authorization')===null) {
        console.log(req)
        req = req.clone({
          headers: req.headers.append('Authorization', 'Bearer ' + bearerToken)
            .append('Content-Type', 'application/json')
        });
        console.log(req.headers);
        return next.handle(req);
      } else {
        console.log(req.headers);
        return next.handle(req);
      }
    }

}
