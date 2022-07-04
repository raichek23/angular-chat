import { Component } from '@angular/core';

import { Comment } from "./class/comment";
import { User } from "./class/user";

const CURRENT_USER: User = new User(1, '五十川 洋平');
const ANOTHER_USER: User = new User(2, '竹井 賢治');

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'Hello!'),
  new Comment(ANOTHER_USER, 'How are you?'),
  new Comment(CURRENT_USER, 'Good!'),
  new Comment(CURRENT_USER, 'What is todays lunch?')
]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
  comment = '';

  addComment(comment: string): void {
    if (comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }
}
