import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

export const filesLoader = async (/** @type {string} */ table,
                                /** @type {number} */ first,
                                /** @type {number} */ end) => {
    const q = query(collection(db, table), where('pos', '>=', first), where('pos', '<=', end))
    const querySnapshot = await getDocs(q)
    const elements = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, category: table === 'rings' ? 'jewelry' : table }))

    return elements
}

export const filesByColorLoader = async (/** @type {string} */ table,
                                /** @type {string} */ color) => {
    const q = query(collection(db, table), where('color', '==', color))
    const querySnapshot = await getDocs(q)
    const elements = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, category: table === 'rings' ? 'jewelry' : table }))

    return elements
}

export const filesByPriceLoader = async (/** @type {string} */ table, /** @type {number} */ first, /** @type {number} */ end) => {
    const q = query(collection(db, table), where('price', '>=', first), where('price', '<=', end))
    const querySnapshot = await getDocs(q)
    const elements = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, category: table === 'rings' ? 'jewelry' : table }))

    return elements
}

export const fileLoader = async (/** @type {string} */ table, /** @type {string} */ id) => {
    const docRef = doc(db, table, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return ({ ...docSnap.data(), id: docSnap.id, category: table === 'rings' ? 'jewelry' : table })
    } else {
        const data = {}
        console.log("No such document")
        return undefined;
    }
}

export const getTotalProducts = async (/** @type {string} */ table) => {
    const querySnapshot = await getDocs(collection(db, table))
    return querySnapshot.size
}