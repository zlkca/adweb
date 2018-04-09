import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
    providers:[PostService],
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    postList:Post[];

    fields:string[] = [];
    constructor(private postServ:PostService){}

    ngOnInit() {
        let self = this;
        let post = new Post()
        this.fields = Object.getOwnPropertyNames(post);
        this.postServ.getPostList().subscribe(
            (r:Post[]) => {
                self.postList = r;
            },
            (err:any) => {
                self.postList = [];
            });
    }

    toDetail(r){}

}

