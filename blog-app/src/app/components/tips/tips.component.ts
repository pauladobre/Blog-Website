import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/featured-post';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  pinnedPosts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.loadPinned().subscribe(posts => {
      this.pinnedPosts = posts;
    });
  }
}

