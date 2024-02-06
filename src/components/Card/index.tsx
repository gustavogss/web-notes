interface CardProps {
    title: string,
    description: string
}

export function Card({title, description}: CardProps) {
    return (
        <button className="bg-slate-700 outline-none text-left rounded-md p-5 space-y-2 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
            <span className='text-sm font-medium text-slate-400'>{title}</span>
            <p className='text-sm leading-5 text-slate-400'>{description}</p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </button>
    );
}