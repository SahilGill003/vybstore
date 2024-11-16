import { Button } from "../ui/button";

export default function HeroSection(props) {
  return (
    <section id="hero" className={"flex flex-col gap-4 md:gap-[2.81rem]"}>
      <div
        className={
          "heading_1 text-3xl sm:text-4xl grid w-min text-primary_text *:bg-white *:p-2 gap-2 md:gap-3"
        }
      >
        <span className={"col-start-1 col-end-2"}>One</span>
        <span className={" w-min col-start-2 col-end-3"}>Stop</span>
        <span className={"col-span-2 w-min"}>MarketPlace</span>
        <span>For</span>
        <span className="w-min !bg-primary">Influencers</span>
      </div>
      <p className={"text-2xl font-bold"}>
        &quot;Unleash Your Influence: Sell Itineraries, Build Your Brand, Create
        Merch, and Share Content - All in one Hub. &quot;
      </p>
      <div className={"flex gap-6 self-start"}>
        <Button
          className={
            "bg-primary text-primary_text !text-lg rounded-xl px-6 py-6 font-semibold hover:bg-primary hover:brightness-90"
          }
        >
          Demo Store
        </Button>
        <Button
          className={
            "!text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent " +
            "ring-1 rounded-xl px-6 py-6 font-semibold text-center hover:brightness-90"
          }
        >
          <span className={"z-20 text-white"}>Join Waitlist</span>
        </Button>
      </div>
    </section>
  );
}
