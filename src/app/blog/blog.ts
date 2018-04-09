import { User } from '../account/account';

export class Post{
  public subject:string;
  public body:string;
  public author:any;
  public created:string;
    constructor(o?:any){
        if(o){
            this.subject = o.subject;
            this.body = o.body;
            if(o.author && o.authorlength>0){
                this.author = {'id':o.author[0], 'name':o.author[1]};
            }
            this.created = o.created;
      }
  }
}

export class Comment{
  public body:string;
  public post:any;
  public author:any;
  public created:string;
    constructor(o?:any){
        if(o){
            this.body = o.body;
            if(o.post && o.postlength>0){
                this.post = {'id':o.post[0], 'name':o.post[1]};
            }
            if(o.author && o.authorlength>0){
                this.author = {'id':o.author[0], 'name':o.author[1]};
            }
            this.created = o.created;
      }
  }
}

