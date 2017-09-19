import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {

  firstName: any;
  lastName: any;
  travelers: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.firstName = params['firstName'] || '';
        this.lastName = params['name'] || '';
        this.travelers = params['persons'] || '';
        console.log(params);
      });
    setTimeout(() => {
      window.print();
    }, 1000);
    setTimeout(function () {
      this.router.navigate(['/']);
    }, 40000);
  }
  goToMenu() {
    this.router.navigate(['/']);
  }

}
