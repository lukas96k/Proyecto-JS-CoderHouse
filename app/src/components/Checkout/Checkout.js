import {collection,getDocs,addDoc,writeBatch,query,where,documentId} from 'firebase/firestore';
import { db } from '../Firebase';
export const Checkout = async (orden, carrito) => {
    const batch = writeBatch(db);
    const orderRef = collection(db, 'ordenes');
    const productosRef = collection(db, 'ListaDeProductos');
    const q = query(
        productosRef,
        where(
            documentId(),
            'in',
            carrito.map((prod) => prod.id)
        )
    );
    const outOfStock = [];

    const productosCarrito = await getDocs(q);

    productosCarrito.docs.forEach((doc) => {
        const itemUpdate = carrito.find((prod) => prod.id === doc.id);

        if (doc.data().stock >= itemUpdate.quantity) {
            batch.update(doc.ref, {
                stock: doc.data().stock - itemUpdate.quantity,
            });
        } else {
            outOfStock.push(itemUpdate);
        }
    });
    if (outOfStock.length === 0) {
        const docRef = await addDoc(orderRef, orden);
        batch.commit();
        return (docRef.id)
    } else {
        console.log(outOfStock);
    }
};