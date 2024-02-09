interface CardProps {
    date: Date,
    content: string
}

export function Card({date, content}: CardProps) {
    return (
        <button className="bg-slate-700 flex flex-col outline-none text-left rounded-md p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
            <span className='text-sm font-medium text-slate-400'>{date.toISOString()}</span>
            <p className='text-sm leading-5 text-slate-400'>{content}</p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </button>
    );
}