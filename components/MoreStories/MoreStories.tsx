import React from "react";
import MoreStoriesProps from "./interface";
import Heading from "../Heading";
import PostPreview from "../PostPreview";

export default function MoreStories({ morePosts }: MoreStoriesProps) {
  return (
    <section>
      <Heading level={Heading.levels.h2} value="More Stories" />
      <div className="flex flex-col gap-4">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}
