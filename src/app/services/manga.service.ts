import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Manga } from '../models/manga.model';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  mangaCollection: AngularFirestoreCollection<Manga>;
  mangas: Observable<Manga[]>;

  constructor(private db: AngularFirestore) { }

  getMangas() {
    this.mangaCollection = this.db.collection('mangas');
    this.mangas = this.mangaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Manga;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
    return this.mangas;
  }
}
