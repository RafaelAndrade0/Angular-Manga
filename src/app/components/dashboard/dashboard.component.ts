import { Component, OnInit } from '@angular/core';
import { Manga } from '../../models/manga.model';
import { MangaService } from '../../services/manga.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mangaList: Manga[];

  constructor(private mangaService: MangaService) { }

  ngOnInit() {
    this.mangaService.getMangas().subscribe(
      mangas => this.mangaList = mangas
    )
  }

}
