import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type ModalProps = {
  date: Date;
  content: string;
};

export function Modal({ date, content }: ModalProps) {
    const TAG = '<span className="text-red-400 group-hover:underline">apagar sua nota</span>';
    
  return (
    <>   
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-sm font-medium text-slate-400">
          {formatDistanceToNow(date, { locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-5 text-slate-400">{content}</p>
      </div>
      <button
        type="button"
        className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none group"
        font-medium
      >
        Deseja <span className="text-red-400 group-hover:underline">apagar sua nota</span> ?
      </button>
    
    </>
  );
}
