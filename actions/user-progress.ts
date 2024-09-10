"use server"

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const upsertUserProgress = async (courseId: number) => {
  const {userId} = await auth();
  const user =  await currentUser();

  if(!userId || !user){
    throw new Error("User not found");
  }

  const course = await getCourseById(courseId);

  if(!course){
    throw new Error("Course not found");
  }

  // throw new Error("Test");

  // if(!courseId.units.length || !courseId.units[0].lessons.length){
  //   throw new Error("Course is empty");
  // }

  const existingUserProgress = await getUserProgress();

  if(existingUserProgress){
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/brain.svg",
    })
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/brain.svg",
  })

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
}

