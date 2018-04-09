import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
    providers:[PostService],
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
    post:Post = new Post();

    constructor(private postServ:PostService, private route: ActivatedRoute){}

    ngOnInit() {
        let self = this;
        self.route.params.subscribe((params:any)=>{
            this.postServ.getPost(params.id).subscribe(
                (r:Post) => {
                    self.post = r;
                },
                (err:any) => {
                    self.post = new Post();
                });
        });
    }

    save() {
        let self = this;
        self.postServ.savePost(self.post).subscribe(
            (r:Post) => {
                self.post = r;
            },
            (err:any) => {
                self.post = new Post();
            });
    }
}

