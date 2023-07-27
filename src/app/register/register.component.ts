import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  regform=this.fb.group({
    usid:['',[Validators.required]],
    email:['',[Validators.required,]],
    password:['',[Validators.required,]]
  })
  

  constructor(private r:Router ,private fb:FormBuilder ,private ss:ServiceService){}

  clicked(){
    let id = this.regform.value.usid
    let email = this.regform.value.email
    let pswd = this.regform.value.password
    console.log(id)
  
    if(this.regform.valid){

      let res = this.ss.register(id,email,pswd)
      res.subscribe((res:any)=>{
      if(res){
        alert(res.message)
        this.r.navigateByUrl("log")
      
      }
    },
    // (err)=>{
    //   console.log(err)
    )
   

  }
  else{
    alert("invalid data")
  }

  }}



