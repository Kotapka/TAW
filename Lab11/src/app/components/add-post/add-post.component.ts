import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  public post = {
    title: '',
    image: '',
    text: '',
    };
  
    constructor(private service : DataService, public router: Router) {
    }
  
    ngOnInit() {
    }
  
    create() {
  this.service.addPost(this.post).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/']);
    }
}
