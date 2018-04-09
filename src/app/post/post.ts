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
          if(o.author.length>0){
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
          this.post = o.post;
          this.author = o.author;
          this.created = o.created;
      }
  }
}

