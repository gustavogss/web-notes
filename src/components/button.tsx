type ButtonProps = {
    description: string
}

export function Button({description}: ButtonProps) {
    return (
        <button
        type="button"
        className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
        font-medium >
            {description}
        </button>
    )
    
}