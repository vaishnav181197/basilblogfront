import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private hc:HttpClient,private ss:ServiceService){

  }
  blog: any[]=[];
  ngOnInit(){
    this.ss.getpost().subscribe((res:any)=>{
      console.log(res.blog)
      this.blog=res.blog

    }),
    (err:any)=>{
      console.log(err.error.message)
    }
  }

}
