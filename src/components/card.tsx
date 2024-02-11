import * as Dialog from "@radix-ui/react-dialog";

import { X } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type CardProps = {  
  note: {
    id: string;
    date: Date;
    content: string;
  };
  onRemoveNote: (id: string) => void;
 
}

export function Card({ note, onRemoveNote}: CardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-700 flex flex-col outline-none text-left rounded-md p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-400">
          {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-5 text-slate-400">{note.content}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 bg-black/50 fixed" />
        <Dialog.Content className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 bg-slate-700 overflow-hidden md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full
      md:rounded-md flex flex-col outline-none md:h-[60vh]">
          <Dialog.Close className="absolute right-0 top-0 p-3 text-slate-400 bg-slate-800 hover:text-slate-100 rounded-bl-3xl ">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-sm font-medium text-slate-400">
          {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-5 text-slate-400">{note.content}</p>
      </div>
      <button
        type="button"
        className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none group"
        onClick={() => onRemoveNote(note.id)}
      >
        Deseja <span className="text-red-400 group-hover:underline">apagar sua nota</span> ?
      </button>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>

  );
}
