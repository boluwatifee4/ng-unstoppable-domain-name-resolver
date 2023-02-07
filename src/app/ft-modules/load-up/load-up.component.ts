import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-load-up',
  templateUrl: './load-up.component.html',
  styleUrls: ['./load-up.component.scss']
})
export class LoadUpComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/resolve-domain'])
    }, 7000)
  }

}
