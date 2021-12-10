import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { QueryClient, QueryClientProvider } from "react-query";
import 'whatwg-fetch';
//import { firebase, initalizeApp } from 'firebase/app'

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});


const firebaseConfig = {
  apiKey: "AIzaSyDwbAJxhk_LKREHMZQ8TQCNO2mK5GJsstE",
  authDomain: "covid-data-panel.firebaseapp.com",
  databaseURL: "https://covid-data-panel-default-rtdb.firebaseio.com",
  projectId: "covid-data-panel",
  storageBucket: "covid-data-panel.appspot.com",
  messagingSenderId: "782959971432",
  appId: "1:782959971432:web:420ad5fa44505fb07b7fdd",
};
// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);