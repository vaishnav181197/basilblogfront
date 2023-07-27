import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../services/service.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {




  logform=this.fb.group({
    usid:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
   pswd :['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]]
  })


  constructor(private r:Router, private ss:ServiceService ,private fb:FormBuilder){}  
  
  //dependancy injection
  


  clicked(){
    let usid = this.logform.value.usid
    let pswd = this.logform.value.pswd
    let res = this.ss.login(usid,pswd)
 console.log(usid,pswd + 'from reactive form')
  res.subscribe((resp:any)=>{
    if(resp){
      localStorage.setItem("currentUser",resp.currentUser)
      localStorage.setItem("currentUsId",resp.currentUserId)
      // localStorage.setItem("token",JSON.stringify(resp.token))
      alert(resp.message)
      this.r.navigateByUrl("movie")
    }
  // },
  // (err)=>{
  //   alert(err.error.message)
  })
}




}


