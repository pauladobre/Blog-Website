import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/featured-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tips-tricks',
  templateUrl: './tips-tricks.component.html',
  styleUrls: ['./tips-tricks.component.css']
})
export class TipsTricksComponent implements OnInit {
  ttPosts: Post[] = [];
  postData: any;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.loadTips().subscribe(posts => {
      this.ttPosts = posts; 
      console.log(this.ttPosts)
    });
   
  }


}
