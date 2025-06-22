import { Suspense } from "react";
import { PostsLoading } from "@/components/posts/posts.loading";
import { PostsServer } from "@/components/posts/posts.server";

export const metadata = {
  title: "Posts",
};

export default function Page() {
  return (
    <Suspense fallback={<PostsLoading />}>
      <PostsServer />
    </Suspense>
  );
}
