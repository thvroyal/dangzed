"use client";

import { useFormState } from "react-dom";
import { checkSecret, State } from "./action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const initialState: State = {
  numOfTries: 0,
};

export default function Home() {
  const [state, formAction] = useFormState(checkSecret, initialState);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-3xl ">Nhập combo của zed</h1>
      <form
        action={formAction}
        className="flex flex-col items-center justify-center gap-3"
      >
        <input
          name="secret"
          className="rounded-full border bg-slate-100 p-6 text-center text-xl uppercase tracking-widest"
          type="text"
        />
        <button
          type="submit"
          className="rounded-lg bg-slate-800 p-4 text-white"
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
    </main>
  );
}
