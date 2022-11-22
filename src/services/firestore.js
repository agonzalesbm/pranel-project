import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

export const filesLoader = async (/** @type {string} */ table,
                                /** @type {number} */ first,
                                /** @type {number} */ end) => {
    const q = query(collection(db, table), where('pos', '>=', first), where('pos', '<=', end))
    const querySnapshot = await getDocs(q)
    const elements = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

    return elements
}

export const fileLoader = async (/** @type {string} */ table, /** @type {string} */ id) => {
    const docRef = doc(db, table, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return ({ ...docSnap.data(), id: docSnap.id })
    } else {
        const data = {}
        console.log("No such document")
        return data;
    }
}