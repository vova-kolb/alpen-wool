"use client";
import Image from "next/image";

export default function ReviewCard({
                                       name,
                                       text,
                                       avatarUrl,
                                   }: { name: string; text: string; avatarUrl?: string | null }) {
    return (
        <div className="rounded-2xl bg-white/5 p-5 backdrop-blur-sm ring-1 ring-white/10 min-h-[300px]">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10">
                    {avatarUrl ? (
                        <Image
                            src={avatarUrl}
                            alt={`${name} avatar`}
                            width={40}
                            height={40}
                            className="h-10 w-10 object-cover"
                        />
                    ) : (
                        <div className="flex h-10 w-10 items-center justify-center text-sm text-white/70">
                            {name.slice(0, 1).toUpperCase()}
                        </div>
                    )}
                </div>
                <div className="text-sm font-medium">{name}</div>
            </div>
            <p className="mt-3 leading-relaxed text-white/80">{text}</p>
        </div>
    );
}
