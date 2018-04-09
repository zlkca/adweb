import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Comment } from '../blog';

@Component({
    providers:[BlogService],
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
    commentList:Comment[];

    fields:string[] = [];
    constructor(private commentServ:BlogService){}

    ngOnInit() {
        let self = this;
        let comment = new Comment()
        this.fields = Object.getOwnPropertyNames(comment);
        this.commentServ.getCommentList().subscribe(
            (r:Comment[]) => {
                self.commentList = r;
            },
            (err:any) => {
                self.commentList = [];
            });
    }

    toDetail(r){}

}

