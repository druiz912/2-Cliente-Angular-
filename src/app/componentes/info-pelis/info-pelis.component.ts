import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-pelis',
  templateUrl: './info-pelis.component.html',
  styleUrls: ['./info-pelis.component.css']
})
export class InfoPelisComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params['id']);
   }

  ngOnInit(): void {
  }

}
