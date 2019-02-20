import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpUtil: HttpService,private router:Router ) { }

  login(user) {
    this.httpUtil.postService(environment.base_url + 'login', user).subscribe(response => {
      console.log(response);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      if (response.status == 200) {
        console.log("login successfull");
        localStorage.setItem('Authorization', response.headers.get('token'));
        this.router.navigate(['/home']);
        console.log("haii");
      }
      else {
        console.log("cannot login");
      }
    });
  }

  register(user) {
    this.httpUtil.postService(environment.base_url+'register', user).subscribe(response => {
      console.log(response);
      if (response.status == 200) {
        console.log(response.body.header);

        localStorage.setItem('Authorization', response.body.headers);
      }
      else {
        console.log(response.body.headers);
      }
    })
  }
}