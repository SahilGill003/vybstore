import Accordions from "./Accordions";

export default function Footer() {
  return (
    <footer className="h-auto text-center space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
      <div className="space-y-4">
        <h3 className={"text-2xl md:text-4xl text-primary font-bold"}>
          Frequently Asked Questions
        </h3>
        <p className={"text-lg"}>
          Quick answers to questions you may have. Can&apos;t find what you are
          looking for?
        </p>
      </div>
      <Accordions />
    </footer>
  );
}
