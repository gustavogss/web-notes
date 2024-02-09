import * as Dialog from "@radix-ui/react-dialog";
import { Modal } from "./modal";
import { X } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type CardProps  = {
  date: Date;
  content: string;
}

export function Card({ date, content }: CardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-700 flex flex-col outline-none text-left rounded-md p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-400">
        {formatDistanceToNow(date, { locale: ptBR, addSuffix: true })}         
        </span>
        <p className="text-sm leading-5 text-slate-400">{content}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 bg-black/50 fixed" />
      <Dialog.Content className="fixed left-1/2 top-1/2 bg-slate-700 overflow-hidden -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full
      rounded-md flex flex-col outline-none h-[60vh]">
         <Dialog.Close className="absolute right-0 top-0 p-3 text-slate-400 bg-slate-800 hover:text-slate-100 rounded-bl-3xl ">
        <X className="size-5"/>
       </Dialog.Close>
        <Modal date={date} content="content"/>        
        </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>
   
  );
}
