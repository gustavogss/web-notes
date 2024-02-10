import * as Dialog from "@radix-ui/react-dialog"
import { Modal } from "./modal"
import { X } from "lucide-react"
import { Button } from "./button"

type AddNodeProps = {
    title: string,
    description: string, 
}

export function AddNote({title, description}:AddNodeProps) {
    return (
        <Dialog.Root>
        <Dialog.Trigger className="bg-slate-600 rounded-md p-5 gap-3 flex flex-col tex-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
            <span className='text-sm font-medium text-slate-200'>{title}</span>
            <p className='text-sm leading-5 text-slate-400'>{description}</p>
        </Dialog.Trigger>
        <Dialog.Portal>
        <Dialog.Overlay className="inset-0 bg-black/50 fixed" />
      <Dialog.Content className="fixed left-1/2 top-1/2 bg-slate-700 overflow-hidden -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full
      rounded-md flex flex-col outline-none h-[60vh]">
         <Dialog.Close className="absolute right-0 top-0 p-3 text-slate-400 bg-slate-800 hover:text-slate-100 rounded-bl-3xl ">
        <X className="size-5"/>
       </Dialog.Close>
       <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-sm font-medium text-slate-400">
         Adicionar nota
        </span>
        <p className="text-sm leading-5 text-slate-400">
        Começe <button className="text-lime-400 hover:underline">gravando uma nota </button> em áudio ou se preferir utilize <button className="text-lime-400 hover:underline">apenas texto</button>
        </p>
      </div>
             <Button description="Salvar nota"/>
        </Dialog.Content>
    </Dialog.Portal>
        </Dialog.Root>
    )
}