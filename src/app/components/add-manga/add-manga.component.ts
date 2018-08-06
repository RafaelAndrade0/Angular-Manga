import { Component, OnInit } from '@angular/core';
import { Manga } from '../../models/manga.model';
import { MangaService } from '../../services/manga.service';
import { Router } from '../../../../node_modules/@angular/router';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {

  newManga: Manga = {
    title: '',
    description: '',
    chapters: 0
  }

  constructor(private mangaService: MangaService, private router: Router) { }

  ngOnInit() {
  }

  onAddManga() {
    // console.log('Hey');
    if(this.newManga.title != '') {
      this.mangaService.addManga(this.newManga);
      this.router.navigate(['/dashboard']);
    }
  }

}
