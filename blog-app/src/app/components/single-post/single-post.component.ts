import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/featured-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  destinationPosts: Array<Post> = [];
  postData: any;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.loadPostsByCategory('Destinations').subscribe(posts => {
      this.destinationPosts = posts.slice(0, 3);
    });
    this.route.params.subscribe(val => {
      this.postService.loadOnePost(val['id']).subscribe(post => {
        this.postData=post;
      })
    })
  }

}

