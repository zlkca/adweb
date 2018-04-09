import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
import { Post,Comment } from './post';

@Injectable()
export class PostService {
    private API_URL = environment.API_URL;

    constructor(private http:HttpClient){ }

    getPostList(query?:string):Observable<Post[]>{
        const url = this.API_URL + 'post' + query ? query:'';
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(url, {'headers': headers}).map((res:any) => {
            let a:Post[] = [];
            if( res.data && res.data.length > 0){
                for(var i=0; i<res.data.length; i++){
                    a.push(new Post(res.data[i]));
                }
            }
            return a;
        })
        .catch((err) => {
            return Observable.throw(err.message || err);
        });
    }

    getPost(id:number):Observable<Post>{
        const url = this.API_URL + 'post/id';
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(url, {'headers': headers}).map((res:any) => {
            return new Post(res.data);
        })
        .catch((err) => {
            return Observable.throw(err.message || err);
        });
    }

    savePost(d:Post):Observable<Post>{
        const url = this.API_URL + 'post';
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let data = {
          'subject': d.subject,
          'body': d.body,
          'author': d.author,
          'created': d.created,
        }
        return this.http.post(url, data, {'headers': headers}).map((res:any) => {
            return new Post(res.data);
        })
        .catch((err) => {
            return Observable.throw(err.message || err);
        });
    }

    getCommentList(query?:string):Observable<Comment[]>{
        const url = this.API_URL + 'comment' + query ? query:'';
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(url, {'headers': headers}).map((res:any) => {
            let a:Comment[] = [];
            if( res.data && res.data.length > 0){
                for(var i=0; i<res.data.length; i++){
                    a.push(new Comment(res.data[i]));
                }
            }
            return a;
        })
        .catch((err) => {
            return Observable.throw(err.message || err);
        });
    }

    getComment(id:number):Observable<Comment>{
        const url = this.API_URL + 'comment/id';
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(url, {'headers': headers}).map((res:any) => {
            return new Comment(res.data);
        })
        .catch((err) => {
            return Observable.throw(err.message || err);
        });
    }

    saveComment(d:Comment):Observable<Comment>{
        const url = this.API_URL + 'comment';
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let data = {
          'body': d.body,
          'post': d.post,
          'author': d.author,
          'created': d.created,
        }
        return this.http.post(url, data, {'headers': headers}).map((res:any) => {
            return new Comment(res.data);
        })
        .catch((err) => {
            return Observable.throw(err.message || err);
        });
    }

}

