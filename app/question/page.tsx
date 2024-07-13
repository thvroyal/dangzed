"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useFormState } from "react-dom";
import { checkQuestion, State } from "../action";

const initialState: State = {
  numOfTries: 0,
};

export default function QuestionPage() {
  const [state, formAction] = useFormState(checkQuestion, initialState);
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-10">
      <Image
        src="/question.png"
        alt="Question"
        width={600}
        height={400}
        className="object-cover"
      />
      <form
        action={formAction}
        className="flex flex-col items-center justify-center gap-3"
      >
        <label>Đây là đâu?</label>
        <input
          name="answer"
          className="rounded-full border bg-slate-100 p-3 text-center text-lg uppercase tracking-widest"
          type="text"
        />
        <button
          type="submit"
          className="rounded-lg bg-slate-800 p-3 text-xs text-white"
        >
          Xác nhận
        </button>
        {state.numOfTries > 0 && (
          <p className="text-red-700">{`Sai mẹ rồi ${state.numOfTries > 1 ? `(x${state.numOfTries})` : ""}`}</p>
        )}
      </form>
      <Dialog open={state.numOfTries === 5} onOpenChange={reloadPage}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{state.message}</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={state.ok} onOpenChange={reloadPage}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{state.message}</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
