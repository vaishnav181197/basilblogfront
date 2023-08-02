import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {
  cuser=localStorage.getItem('currentUsId')
  constructor(private ss:ServiceService,private r:Router){

  }

  blog: any[]=[];
  ngOnInit(){
    this.ss.getmypost().subscribe((res:any)=>{
      console.log(res.blog)
      this.blog=res.blog.reverse()

    }),
    (err:any)=>{
      console.log(err.error.message)
    }
  }

  remove(id:any){
    console.log(id)
    this.ss.removeb(id).subscribe((res:any)=>{
      // console.log(res.blog)
      // this.blog=res.blog.reverse()
      alert("Blog Removed")
      this.r.navigateByUrl('mb')


    }),
    (err:any)=>{
      console.log(err.error.message)
    }
  }
}
