import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2gAxEmmx2D0jHmEf7aplzTh9Iyo"];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
