import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location/location.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

    location: any;
    constructor(private locationService:LocationService) { }
  
    ngOnInit(): void {
      this.locationService.getLocation().subscribe((data) => {
        this.location = data;
      });
    }

}
