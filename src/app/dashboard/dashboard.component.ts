import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { ApiService } from '../shared/api.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  post:Post={
    _id:'',
    title:'',
    content:'',
    username:''
  }
  titile:string = '';
  content:string = '';
  username:string = '';
  allPosts:Post[]=[];

  constructor(private api: ApiService,private http: HttpClient,private fb:FormBuilder,private r:Router,private ss:ServiceService){
    this.getAllPost();

   }
  ngOnInit(): void {
    this.titile ='';
    this.content = '';
    this.username ='';
    this.getAllPost();

    
  }
  //get all data subscribe
  getAllPost(){
    this.api.getAllPosts().subscribe(res=>{
      this.allPosts=res;
    },err=>{
      console.log(err)
    })
  }
  //get by id subscribe
  getPostById(post:Post){
    this.api.getPostById(post._id).subscribe(res=>{
      post =res;
    },err=>{
      console.log(err)
    })
  }
  //delete data by id subscribe
  deletePostData(post:Post){
    if(window.confirm('are you sure want to delete this data id:' + post._id)){
      this.api.deletePost(post._id).subscribe(res=>{
        this.allPosts=[];
        this.getAllPost();
      },err=>{
        console.log(err)
      })

    }
    
  }
  //create post data subscribe 
  createPostData(post:Post){
    this.api.createPost(post).subscribe(res=>{
      this.allPosts=[];
      this.getAllPost();
    },err=>{
      console.log(err)
    })
  }
  //edit data bu id 
  editPost(post:Post){
    this.getPostById(post);
    this.titile =post.title;
    this.content =post.content;
    this.username =post.username;
   
  }
  //update data
  updatePost(){
    if(this.titile !=''|| this.content !='' || this.username !=''){
      alert('please fill all the values on fields');
      return;
    }
    this.post.title =this.titile;
    this.post.content=this.content;
    this.post.username=this.username;  

    this.api.updatePost(this.post).subscribe(res=>{
      this.getAllPost();
    },err=>{
      console.log(err)
    })
     
  }



  lgform=this.fb.group({
    title:['',[Validators.required,Validators.pattern("")]],
    content:['',[Validators.required,Validators.pattern("")]],
    username:['',[Validators.required,Validators.pattern("")]],
   
   
    
  })
  
  
  clicked(){
    let title=this.lgform.value.title
    let content=this.lgform.value.content
    let date=String(new Date())
    let username=localStorage.getItem('currentUsId')
    
    
   
  
  console.log(title)
    let res=this.ss.addpost(title,content,username,date)
    console.log(res)
  res.subscribe((resp:any)=>{
    if(resp){
  // localStorage.setItem("currentUser",resp.currentUser)
  // localStorage.setItem("currentAcno",resp.currentAcno)
  // localStorage.setItem ("token",JSON.stringify(resp.token))
  alert(resp.message)
  this.r.navigateByUrl("blog")
      
}
  },
  (err:any)=>{
    alert(err.error.message)
  })
  
  
  }
  lgout(){
    localStorage.clear()
    this.r.navigateByUrl('log')
  }
  
  




}
