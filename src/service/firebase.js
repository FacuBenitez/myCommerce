import {initializeApp} from "firebase/app";
import {collection, getFirestore, query, getDocs, where} from "firebase/firestore";

const firebaseConfig = {

    apiKey: process.env.REACT_APP_apiKey,
  
    authDomain: process.env.REACT_APP_authDomain,
  
    projectId: process.env.REACT_APP_projectId,
  
    storageBucket: process.env.REACT_APP_storageBucket,
  
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
  
    appId: process.env.REACT_APP_appId,
  
    measurementId : process.env.REACT_APP_measurementId,
  
  };
  
  const app = initializeApp(firebaseConfig)

 export const db = getFirestore(app)



 export const getProducts = (key, operator, value) =>{

  return new Promise((resolve, reject) =>{
    const collectionQuery = key && operator && value ?
    query(collection(db, 'items'), where(key, operator, value)):
    collection(db, 'items')


      getDocs(collectionQuery).then(querySnapshot=>{
        const products = querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
        })
        resolve(products);

      }).catch(err => {
      reject('Error getting products: ',err)
      })

  })

 }