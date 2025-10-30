export default function AccentLine({ className = "" }: { className?: string }) {
    return (
        <span
            className={`block h-[3px] w-16 rounded-full bg-gradient-to-r from-amber-400/90 via-amber-300/70 to-amber-200/50 ${className}`}
            aria-hidden
        />
    );
}
