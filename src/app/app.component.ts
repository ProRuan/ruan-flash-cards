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
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, MatIconModule],
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
    // this.addDeck(); // I. check
    // await this.getWholeDeck();    // check
    await this.getDeck(); // II. check
    // this.updateDeck(); // III. check
    // this.deleteDeck();    // IV. check
  }

  async addDeck() {
    // params deckName + deck
    // get ref
    await addDoc(collection(this.firestore, 'test'), this.deck).then(
      (docRef) => {
        console.log(docRef.id); //p4eZcO5QV43IYnigxALJ
      }
    );
    console.log('added deck: ', this.deck);
  }

  async getWholeDeck() {
    const querySnapshot = await getDocs(collection(this.firestore, 'deck'));
    console.log('snapshot: ', querySnapshot);
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      this.id = doc.id;
      console.log('this id: ', this.id);
    });
  }

  async getDeck() {
    // get deck, doc or value
    const docRef = doc(this.firestore, 'deck', this.id);
    const docSnap = await getDoc(docRef);
    console.log('get deck: ', docSnap.data());
    console.log('deck id: ', docRef.id);
    if (docRef.id) {
      console.log('id already existing');
    }

    let tempDeck = docSnap.data();
    this.deck = tempDeck;
    console.log('this deck: ', this.deck);
    console.log('temp deck: ', tempDeck);

    console.log('barat: ', this.deck.barat.indonesian);
  }

  async updateDeck() {
    // params value
    // update deck, doc or value
    let cardRef = doc(this.firestore, 'deck', this.id);
    console.log('update: ', cardRef);

    this.deck.barat.indonesian = 'barat';
    console.log('update: ', this.deck.barat.indonesian);

    await updateDoc(cardRef, this.deck);
  }

  async deleteDeck() {
    // delete doc or value
    await deleteDoc(doc(this.firestore, 'deck', this.id));
  }

  // Modul 13
  // --------
  // font einbinden - check
  // @mixin - check
  // interfaces - check
  // pop() - check

  // Modul 14
  // --------
  // for, if, if-else, switch - check
  // ngStyle, ngClass, ternary - check
  // input, click, output - check
  // ngModel - open (createCardContent)
  // services - open (cardsService)
  // --> provides the cards, markedCards, favCards, ...

  // Modul 15
  // --------
  // collection, doc - check
  // collectionData, onSnapshot - check
  // subscribe, unsubscribe - check
  // where, orderBy, limit - check
  // docChanges - check
}
