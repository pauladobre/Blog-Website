import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { map } from 'rxjs/operators'
import { Categories } from '../models/categories';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private asf: AngularFirestore) { }

  loadData() {
    return this.asf.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data() as Categories;
          return { ...data, id } as Categories;
        }) as Categories[];
      })
    );
  }
}

