import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private asf: AngularFirestore) { }


  loadFeatured() {
    return this.asf.collection('posts', ref => ref.where('isFeatured', '==', true)).snapshotChanges().pipe(
      map((actions: any[]) => {
        return actions.map((a: { payload: { doc: { id: any; data: () => any; }; }; }) => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data();
          return { ...data, id };
        });
      })
    );
  }

  loadPostsByCategory(category: string) {
    return this.asf.collection('posts', ref => ref.where('category.category', '==', category))
      .snapshotChanges()
      .pipe(
        map((actions: any[]) => {
          return actions.map((a: { payload: { doc: { id: any; data: () => any; }; }; }) => {
            const id = a.payload.doc.id;
            const data = a.payload.doc.data();
            return { ...data, id };
          });
        })
      );
  }

  loadOnePost(postId: any) {
    return this.asf.doc(`posts/${postId}`).valueChanges();
  }

}
