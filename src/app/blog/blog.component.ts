import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../services/service.service';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  cuser=localStorage.getItem('currentUsId')
  constructor(private hc:HttpClient,private ss:ServiceService,private fb:FormBuilder){

  }
  blog: any[]=[];
  ngOnInit(){
    this.ss.getpost().subscribe((res:any)=>{
      console.log(res.blog)
      this.blog=res.blog.reverse()

    }),
    (err:any)=>{
      console.log(err.error.message)
    }
  }


  cform=this.fb.group({
    cmnt:['',[Validators.required]]
  })

  submitted(id:any){
    let cmnt=this.cform.controls.cmnt.value
    let user=localStorage.getItem('currentUsId')
    let _id=id
    console.log(cmnt,user,_id)

    this.ss.addcmnt(cmnt,user,_id).subscribe((res:any)=>{
      // console.log(res.blog)
      // this.blog=res.blog.reverse()
      alert("Comment added")
      // this.r.navigateByUrl('mb')


    }),
    (err:any)=>{
      console.log(err.error.message)
    }

  }



}
