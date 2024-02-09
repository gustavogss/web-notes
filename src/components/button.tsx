export function Button() {
    return (
        <button
        type="button"
        className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none group"
        font-medium >
            Deseja <span className="text-red-400 group-hover:underline">apagar sua nota</span>?
        </button>
    )
    
}