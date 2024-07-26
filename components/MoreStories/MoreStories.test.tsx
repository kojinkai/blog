import React from "react";
import { render } from "@testing-library/react";
import MoreStories from "./MoreStories";
import MoreStoriesProps from "./interface";

const defaultProps = {
  morePosts: [
    {
      "slug": "hey-this-is-a-new-post-by-lewis",
      "title": "Hey this is a new post by lewis",
      "date": "2024-07-25T00:00:00.000+01:00",
      "excerpt": "Unlike many other posts, this one is mine",
      "author": {
        "name": "Lewis Nixon",
      }
    },
    {
      "slug": "yet-another-post-from-lewis",
      "title": "Yet another post from Lewis",
      "date": "2024-07-25T00:00:00.000+01:00",
      "excerpt": "Nothing more to add this time",
      "author": {
        "name": "Lewis Nixon",
      }
    }
  ]
};

const setup = (props: MoreStoriesProps) => render(<MoreStories {...props} />);

describe("The MoreStories component", () => {
  it("displays the section heading", () => {
    const { getByRole } = setup(defaultProps);

    expect(getByRole("heading", {level: 2, name: "More Stories"})).toBeInTheDocument();
  });

  it("displays each additional post", () => {
    const { getAllByRole } = setup(defaultProps);

    expect(getAllByRole("link")).toHaveLength(2);
  });
});
