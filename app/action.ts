"use server";
import { env } from "@/env.mjs";
import { redirect } from "next/navigation";

export type State = {
  numOfTries: number;
  ok?: boolean;
  message?: string;
};

export async function checkSecret(prevState: State, formData: FormData) {
  const secret = formData.get("secret") as string;
  if (secret && secret.toLowerCase() === env.SECRET.toLowerCase()) {
    redirect("/question");
  } else {
    return {
      numOfTries: prevState.numOfTries + 1,
      ok: false,
      message: "Con gà này, sai rồi, thử lại đi!",
    };
  }
}

export async function checkQuestion(prevState: State, formData: FormData) {
  const answer = formData.get("answer") as string;
  if (answer && answer.toLowerCase() === env.ANSWER.toLowerCase()) {
    return {
      ...prevState,
      ok: true,
      message: "Kaka, giỏi đấy!",
    }
  } else if (prevState.numOfTries === 4) {
    return {
      numOfTries: prevState.numOfTries + 1,
      ok: false,
      message: "Đm ngu, đây là tên quận",
    };
  } else {
    return {
      numOfTries: prevState.numOfTries + 1,
      ok: false,
      message: "Con gà này, sai rồi, thử lại đi!",
    };
  }
}