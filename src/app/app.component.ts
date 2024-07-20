import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { docData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ruan-flash-cards';

  firestore: Firestore = inject(Firestore);
  id: string = 'ECGOd9AlLCSzKI00ctSI';
  tempDeck: any;

  deck: any = {
    utara: {
      indonesian: 'utara',
      german: 'Norden',
    },
    timur: {
      indonesian: 'timur',
      german: 'Osten',
    },
    selatan: {
      indonesian: 'selatan',
      german: 'Süden',
    },
    barat: {
      indonesian: 'barat',
      german: 'Westen',
    },
  };

  async ngOnInit() {
    if (this.id) {
      console.log(this.id);
    }
    // this.addDeck();    // I. check
    // await this.getWholeDeck();    // check
    await this.getDeck(); // II. check
    this.updateDeck(); // III. check
    // this.deleteDeck();    // IV. check
  }

  async addDeck() {
    await addDoc(collection(this.firestore, 'deck'), this.deck);
    console.log('added deck: ', this.deck);
  }

  async getWholeDeck() {
    const querySnapshot = await getDocs(collection(this.firestore, 'deck'));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      this.id = doc.id;
      console.log('this id: ', this.id);
    });
  }

  async getDeck() {
    const docRef = doc(this.firestore, 'deck', this.id);
    const docSnap = await getDoc(docRef);
    console.log('get deck: ', docSnap.data());

    let tempDeck = docSnap.data();
    this.deck = tempDeck;
    console.log('this deck: ', this.deck);
    console.log('temp deck: ', tempDeck);

    console.log('barat: ', this.deck.barat.indonesian);
  }

  async updateDeck() {
    let cardRef = doc(this.firestore, 'deck', this.id);
    console.log('update: ', cardRef);

    this.deck.barat.indonesian = 'barat';
    console.log('update: ', this.deck.barat.indonesian);

    await updateDoc(cardRef, this.deck);
  }

  async deleteDeck() {
    await deleteDoc(doc(this.firestore, 'deck', this.id));
  }

  // Modul 13
  // --------
  // font einbinden
  // @mixin
  // interfaces
  // pop()

  // Modul 14
  // --------
  // for, if, if-else, switch
  // ngStyle, ngClass
  // input, click, output
  // services

  // Modul 15
  // --------
  // collection, doc
  // collectionData, onSnapshot
}
