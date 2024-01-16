import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {
  apiurl='http://localhost:3000/signup';

  constructor(private _http:HttpClient) { }

  GetAlluser():Observable<any>{
    return this._http.get<any>(this.apiurl);
  }


  Adduser(data:any){
   return  this._http.post("http://localhost:3000/signup",data)
}
deleteById(id:any){
 return this._http.delete(this.apiurl+"/" +id)
}
GetAllRole(){
  return this._http.get<any>(this.apiurl);
}
GetUserById(UserId:any){
  return this._http.get(this.apiurl+'/'+UserId)
}
UpdateUser(inputdata:any){
  return this._http.put(this.apiurl+'/'+inputdata.id,inputdata)

}
}

