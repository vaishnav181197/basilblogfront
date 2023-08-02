import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl ='http://localhost:3000'

  constructor(private http:HttpClient) { }
  website:any={
    "jamsheer123":{usid:"123",email:"jamsheer@gmail.com",password:"98765432"},
    "jaseel124":{usid:"124",email:"jamsheer@gmail.com",password:"12345678"},
 
}



  register(usid:any,email:any,pswd:any){

    let data={
      usid,
      email,
      pswd
    }

  return  this.http.post("http://localhost:3000/register",data)
   
  }


  login(usid:any,pswd:any){

    let data={
      usid,
      pswd
    }
    return this.http.post("http://localhost:3000/login",data)

    
  }
  
  addpost(  title: any ,content:any,username:any,date:any) {

    let data={
     
      title,
      content,
      username,date
    }

    console.log(data+"jassss")
     return this.http.post("http://localhost:3000/addpost",data)
}

getpost(){
  return this.http.get<any[]>(`${this.apiUrl}/getpost`);

}
getmypost(){
  let data={
    me:localStorage.getItem('currentUsId')
  }
  return this.http.post(`${this.apiUrl}/getmypost`,data);

}
removeb(id:any){
  let data={
    _id:id
  }
  return this.http.post(`${this.apiUrl}/rmblog`,data);
}
addcmnt(cmnt:any,user:any,_id:any){
  let data={
    cmnt,
    user,
    _id
  }
  return this.http.post(`${this.apiUrl}/addcmnt`,data);
}



}