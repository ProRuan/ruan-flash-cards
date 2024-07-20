import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ruan-flash-cards',
        appId: '1:1025684437438:web:dc792dc99e6f6595dd21ef',
        storageBucket: 'ruan-flash-cards.appspot.com',
        apiKey: 'AIzaSyAytkPviPecjoC6ruceYbuAL4WdXLLTpzk',
        authDomain: 'ruan-flash-cards.firebaseapp.com',
        messagingSenderId: '1025684437438',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
