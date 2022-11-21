import { db } from "./firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';

export const filesLoader = async (/** @type {string} */ table,
                                /** @type {number} */ first,
                                /** @type {number} */ end) => {
    const q = query(collection(db, table), where('pos', '>=', first), where('pos', '<=', end))
    const querySnapshot = await getDocs(q)
    const elements = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

    console.log(elements)
}