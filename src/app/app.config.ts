import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './AuthInterceptor';
import {provideFirebaseApp , initializeApp } from '@angular/fire/app';
import {getAuth , provideAuth } from '@angular/fire/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBRSAjljFn3J_Lpk_CD10_a3tb2tYz4kQw",
  authDomain: "shopforemi.firebaseapp.com",
  projectId: "shopforemi",
  storageBucket: "shopforemi.firebasestorage.app",
  messagingSenderId: "181782064973",
  appId: "1:181782064973:web:0193f057d46b9b38a99104",
  measurementId: "G-YFRW93XMFZ"
};


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),               

    provideAuth(() => getAuth()) 
                 
  ],
};

