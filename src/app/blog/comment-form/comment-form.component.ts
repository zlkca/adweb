import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Comment } from '../blog';

@Component({
    providers:[BlogService],
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
    comment:Comment = new Comment();

    constructor(private commentServ:BlogService, private route: ActivatedRoute){}

    ngOnInit() {
        let self = this;
        self.route.params.subscribe((params:any)=>{
            this.commentServ.getComment(params.id).subscribe(
                (r:Comment) => {
                    self.comment = r;
                },
                (err:any) => {
                    self.comment = new Comment();
                });
        });
    }

    save() {
        let self = this;
        self.commentServ.saveComment(self.comment).subscribe(
            (r:Comment) => {
                self.comment = r;
            },
            (err:any) => {
                self.comment = new Comment();
            });
    }
}

