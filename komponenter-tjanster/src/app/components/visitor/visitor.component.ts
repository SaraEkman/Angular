import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Visitor } from 'src/app/models/Visitor';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

  constructor(private service:MovieService) { }

  ngOnInit(): void {
     this.service.publishVisitor.subscribe((published:Visitor) => {
      console.log(published);
    });
  }
  visitorAnnouncment() {
    this.service.visitorAnnouncement({ name: 'Sara' })
  }
}
