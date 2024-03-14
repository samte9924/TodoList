"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateTodo(formData) {
  const id = formData.get("id");
  const task = formData.get("task");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("Update: User is not authenticated");
    return;
  }

  const { data, error } = await supabase
    .from("todos")
    .update({
      task,
    })
    .match({ id: id, user_id: user.id });

  if (error) {
    console.error("Error inserting data", error);
    return;
  }

  revalidatePath("/home");
  return { message: "Success" };
}
