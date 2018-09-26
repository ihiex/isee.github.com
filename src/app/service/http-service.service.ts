import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

private static METHOD_DELTE = 'DELETE';
 private static METHOD_POST = 'POST';
 private static METHOD_GET = 'GET';
 private static METHOD_PUT = 'PUT';

  constructor(private http:HttpClient) { }


//返回json格式的obj对象
// apiPost(url, body, urlSearchParams?:any):Observable<{}>{
//   let options={
//     body: body?body:null,
//     params: urlSearchParams,
//     responseType:'json'
//   };
//   return this.http.request(HttpServiceService.METHOD_POST,url,options);
// }

//返回一个obj 对象
// apiGet(url, urlSearchParams?: any): Observable<{}> {
//   let options = {
//    params: urlSearchParams,
//    responseType: 'json'
//   };
//   return this.http.request(HttpServiceService.METHOD_GET, url, options);
//  }

}
