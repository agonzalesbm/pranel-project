// import { storage } from "./firebase";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// export const uploadImage = async (file) => {
//     const storageRef = ref(storage, `productos/${file.name}`)
//     return await uploadBytes(storageRef, file)
// }

// export const loadImage = async () => {
//     const url = await getDownloadURL(ref(storage, 'productos/wow.png'))
//     return url
// }

// export const getImageURL = async (fileRef) => {
//     return await getDownloadURL(fileRef)
// }
