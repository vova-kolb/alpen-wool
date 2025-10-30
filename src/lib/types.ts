import type { Timestamp } from "firebase/firestore";

export type ProductImage = { src: string; alt?: string };

export type Product = {
    id: string;            // firestore doc id (заполняешь из snapshot.id)
    slug: string;
    title: string;
    short: string;
    images: ProductImage[];

    // optional
    material?: string;
    colors?: [];
    size?: string;
    weight?: string;
    isAvailable?: boolean;

    createdAt?: Timestamp;
    updatedAt?: Timestamp;
};


export type Review = {
    id: string;
    name: string;
    text: string;
    avatarUrl?: string | null;
    createdAt: number;
};