interface CardProps {
    title: string,
    description: string
}

export function Card({title, description}: CardProps) {
    return (
        <div className="bg-slate-700 rounded-md p-5 space-y-3 overflow-hidden relative">
            <span className='text-sm font-medium text-slate-400'>{title}</span>
            <p className='text-sm leading-5 text-slate-400'>{description}</p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
    );
}