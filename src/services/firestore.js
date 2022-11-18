import { db } from "./firebase";
import { addDoc, collection, getDocs } from 'firebase/firestore';

export const loadBags = async() => {
    const querySnapshot = await getDocs(collection(db, 'bags'))
    const elements = querySnapshot.docs.map(doc => doc.data())
    console.log(elements)
}