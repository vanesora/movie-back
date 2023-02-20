import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import AppRouter from './navigation/AppRouter';

const App = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <div className='container-app'>
        <AppRouter />
      </div>
    </FirestoreProvider>

  );
}

export default App;
