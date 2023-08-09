import {Component, OnInit} from '@angular/core';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  message = 'There should be a hello message';
  constructor(private service: RequestService) { }

  ngOnInit() {

  }

  getHelloMessage(): void {
    this.service.getWelcomeMessage().subscribe(data => this.message = data.message);
  }

  getGoodbyeMessage(): void {
    this.service.getGoodbyeMessage().subscribe(data => this.message = data.message);
  }
}
