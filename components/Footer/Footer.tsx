import Heading from "../Heading";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t dark:border-slate-400 border-slate-700">
      <div className="container mx-auto px-5">
        <div className="py-10">
          <Heading
            level={Heading.levels.h4}
            value="When we are not sure, we are alive."
          />
        </div>
      </div>
    </footer>
  );
}
