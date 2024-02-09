import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "./button";

type ModalProps = {
  date: Date;
  content: string;
};

export function Modal({ date, content }: ModalProps) {
  return (
    <>   
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-sm font-medium text-slate-400">
          {formatDistanceToNow(date, { locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-5 text-slate-400">{content}</p>
      </div>
      <Button />
    </>
  );
}
