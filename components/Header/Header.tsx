import Link from "next/link";
import Heading from "../Heading";

export default function Header() {
  return (
    <nav className="pt-4 mb-12">
      <Heading
        level={Heading.levels.h1}
        value={
          <>
            <Link href="/" className="hover:underline">
              Loosely Typed
            </Link>
            .
          </>
        }
      />
    </nav>
  );
}
