import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async onSubmit(form: NgForm) {
    try {
      await this.authService.singIn(form.value);
      this.router.navigate(['/recipes']);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
}
