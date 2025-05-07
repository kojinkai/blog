import { Post } from "@/models";
import { render } from "@testing-library/react";
import PostMeta from "./PostMeta";
import PostMetaProps from "./interface";

const defaultProps = {
  post: {
    slug: "understanding-cap-tables-and-stock-options",
    title: "Understanding Cap Tables and Stock Options",
    publishedDate: "2025-05-06T00:00:00.000Z",
    excerpt: "2025-05-06T00:00:00.000Z",
    author: { name: "Lewis Nixon" },
    featuredImage: {
      width: 2304,
      height: 1792,
      url: "https://images.ctfassets.net/vovnw7b6qjwq/6wIPjZBjoyW2Dwfz99O1Jn/cb5b5f664b02b4bff01a918fc3f6e959/Firefly_A_stock_chart_trending_upwards_in_front_of_a_backdrop_of_python_code_in_an_IDE_639344.jpg",
      title:
        "A stock chart trending upwards in front of a backdrop of python code in an IDE",
    },
  } as Post,
};

const setup = (props: PostMetaProps) => render(<PostMeta {...props} />);

describe("The PostMeta component", () => {
  it("Displays the published date", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText("06 May 2025")).toBeInTheDocument();
  });

  it("Displays the author", () => {
    const { getByText } = setup(defaultProps);

    expect(getByText("By Lewis Nixon")).toBeInTheDocument();
  });
});
