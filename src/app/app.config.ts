import { OrdersService } from './Sevices/orders.service';
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {provideFirebaseApp , initializeApp } from '@angular/fire/app';
import {getAuth , provideAuth } from '@angular/fire/auth'

import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import {FirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  FirebaseAppModule} from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';




const firebaseConfig = {
  apiKey: "AIzaSyBRSAjljFn3J_Lpk_CD10_a3tb2tYz4kQw",
  authDomain: "shopforemi.firebaseapp.com",
  projectId: "shopforemi",
  storageBucket: "shopforemi.firebasestorage.app",
  messagingSenderId: "181782064973",
  appId: "1:181782064973:web:0193f057d46b9b38a99104",
  measurementId: "G-YFRW93XMFZ"
};


importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig))
importProvidersFrom(AngularFireAuth)
importProvidersFrom(AngularFireAuthModule)


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),               
    provideAuth(() => getAuth()),
    provideRouter(routes),
    OrdersService,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideHttpClient(),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),    
      AngularFireAuthModule,FirestoreModule,
       FirebaseAppModule
      )



                 
  ],
};

