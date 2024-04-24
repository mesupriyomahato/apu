"use server";

import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { adminUsers } from "@/data/admins";

export async function createPost(data: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email || !adminUsers.adminEmails.includes(user.email)) {
    throw new Error("Unauthorized: Only ADMINS can perform this action");
  }

  const caption = data.get("caption") as string;
  const banner = data.get("banner") as string;
  const url = data.get("url") as string;
  const pathid = data.get("pathid") as string;

  await prisma.creations.create({
    data: {
      caption,
      banner,
      url,
      pathid
    },
  });

  return { success: true };
}

export async function deletePost(id: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email || !adminUsers.adminEmails.includes(user.email)) {
    throw new Error("Unauthorized: Only ADMINS can perform this action");
  }

  await prisma.creations.delete({
    where: {
      id,
    },
  });

  return { success: true };
}
