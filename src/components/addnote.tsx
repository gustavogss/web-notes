import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from 'sonner';

type AddNodeProps = {
    title: string,
    description: string,
    onNoteCreated: (content: string) => void
}


export function AddNote({ title, description, onNoteCreated }: AddNodeProps) {
    const [shouldOnBoard, setShouldOnBoard] = useState(true);
    const [content, setContent] = useState('')
    const [isRecording, setIsRecording] = useState(false);

    function handlerEditorOnBoard() {
        setShouldOnBoard(false);
    }

    function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)

        if (event.target.value === '') {
            setShouldOnBoard(true);
        }
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault()
        if (content === "") {
            return;
          }
        onNoteCreated(content)
        setContent('')
        setShouldOnBoard(true);

        toast.success('Nota criada com sucesso!')
    }

    function handleStartRecord() {
        setIsRecording(true);
        setShouldOnBoard(false);
    }

    function handleStopRecord() {
        setIsRecording(false);
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="bg-slate-600 rounded-md p-5 gap-3 flex flex-col tex-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
                <span className='text-sm font-medium text-slate-200'>{title}</span>
                <p className='text-sm leading-5 text-slate-400 flex flex-col text-left'>{description}</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 bg-black/50 fixed" />
                <Dialog.Content className="fixed left-1/2 top-1/2 bg-slate-700 overflow-hidden -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full
      rounded-md flex flex-col outline-none h-[60vh]">
                    <Dialog.Close className="absolute right-0 top-0 p-3 text-slate-400 bg-slate-800 hover:text-slate-100 rounded-bl-3xl ">
                        <X className="size-5" />
                    </Dialog.Close>
                    <form className="flex-1 flex flex-col">
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className="text-sm font-medium text-slate-400">
                                Adicionar nota
                            </span>
                            {shouldOnBoard ? (
                                <p className="text-sm leading-5 text-slate-400">
                                    Começe <button
                                        className="text-lime-400 hover:underline"
                                        onClick={handleStartRecord}>gravando uma nota </button> em áudio ou se preferir utilize <button
                                            onClick={handlerEditorOnBoard}
                                            className="text-lime-400 hover:underline">apenas texto</button>
                                </p>
                            ) :
                                (
                                    <textarea autoFocus
                                        className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                                        onChange={handleContentChange}
                                        value={content}
                                    />
                                )
                            }
                        </div>
                        {isRecording ? (
                            <button
                                type="button"
                                onClick={handleStopRecord}
                                className="w-full bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font-medium hover:text-slate-100"

                            >
                                Gravando... (Clique para interromper)
                            </button>
                        ) :

                            <button
                                type="button"
                                onClick={handleSaveNote}
                                className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
                            >
                                Salvar nota
                            </button>
                        }

                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}