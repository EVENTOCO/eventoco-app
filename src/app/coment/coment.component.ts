import { Component } from '@angular/core';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrl: './coment.component.css'
})
export class ComentComponent {
  description: string = '';
//variable
  coment: Comment = {
    description: this.description,
    created_at: new Date(),
    updated_at: new Date(),
    user_id: 1,
    event_id: 1
  };

  saveComment() {
    this.coment.description = this.description;
    fetch('http://localhost:8080/api/v1/coments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.coment)
    }).then(response => {
      console.log(response.body);
    })
  }
}

export interface Comment {
  description: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  event_id: number;
}
