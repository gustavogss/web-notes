type AddNodeProps = {
    title: string,
    description: string
}

export function AddNote({title, description}:AddNodeProps) {
    return (
        <div className="bg-slate-600 rounded-md p-5 space-y-3">
            <span className='text-sm font-medium text-slate-200'>{title}</span>
            <p className='text-sm leading-5 text-slate-400'>{description}</p>
        </div>
    )
}