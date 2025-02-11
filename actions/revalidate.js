"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateThePath(path) {
  revalidatePath(path);
}

export async function revalidateTheTag(tag) {
  revalidateTag(tag);
}
