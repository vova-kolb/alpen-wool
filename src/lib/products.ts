import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Product } from "./types";

const COL = "products";

// CREATE
export async function addProduct(p: Omit<Product, "id" | "createdAt" | "updatedAt">) {
    const ref = collection(db, COL);
    const docRef = await addDoc(ref, {
        ...p,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    });
    return docRef.id;
}

// READ (all)
export async function getProducts(): Promise<Product[]> {
    const ref = collection(db, COL);
    const snap = await getDocs(ref);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Product));
}

// READ (by id)
export async function getProductById(id: string): Promise<Product | null> {
    const ref = doc(db, COL, id);
    const snap = await getDoc(ref);
    return snap.exists() ? ({ id: snap.id, ...snap.data() } as Product) : null;
}

// READ (by slug)
export async function getProductBySlug(slug: string): Promise<Product | null> {
    const ref = collection(db, COL);
    const q = query(ref, where("slug", "==", slug));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() } as Product;
}

// UPDATE
export async function updateProduct(id: string, data: Partial<Product>) {
    const ref = doc(db, COL, id);
    await updateDoc(ref, { ...data, updatedAt: serverTimestamp() });
}

// DELETE
export async function removeProduct(id: string) {
    const ref = doc(db, COL, id);
    await deleteDoc(ref);
}
