import Image from "next/image";
import Illustration4 from "@/public/images/d.png";
import Illustration1 from "@/public/images/a.png";
import Illustration3 from "@/public/images/c.png";
import Illustration2 from "@/public/images/b.png";

const FeatureSection = () => {
  return (
    <section
      className={"text-center md:flex md:items-center md:col-span-2 md:gap-8 "}
    >
      <h3
        className={
          "text-primary text-xl md:text-2xl font-bold space-y-4 mb-3 md:mb-5"
        }
      >
        From Creation to Monetization: Vyb Store Has It All
      </h3>
      <div className={"flex gap-2"}>
        <div
          className={
            "flex flex-1 flex-col gap-2 *:p-4 *:flex *:flex-col *:items-center *:justify-center *:gap-4 *:bg-black *:rounded-2xl"
          }
        >
          <article>
            <h4 className={"font-semibold"}>Trusted By Influencers</h4>
            <p>A trusted platform for influencers to grow and earn.</p>
            <Image height={180} src={Illustration4} alt={"influencers"} />
          </article>
          <article className={"flex-grow"}>
            <h4 className={"font-semibold"}>Authentic Payment Partner</h4>
            <p>Reliable, fast, and secure payments you can trust</p>
            <Image height={180} src={Illustration1} alt={"mobile payment"} />
          </article>
        </div>
        <div
          className={
            "w-full flex flex-1 flex-col gap-2 *:p-4 *:flex *:flex-col *:items-center *:justify-center *:gap-4 *:bg-black *:rounded-2xl"
          }
        >
          <article>
            <h4 className={"font-semibold"}>Secured Data</h4>
            <p>Advanced security measures to protect your valuable data</p>
            <Image
              height={180}
              src={Illustration3}
              alt={"computer screen"}
              width={100}
            />
          </article>
          <article className={"flex-grow"}>
            <h4 className={"font-semibold"}>Monetize Your Influence</h4>
            <p>Seamlessly turn your influence into consistent revenue</p>
            <Image height={180} src={Illustration2} alt={"money"} width={100} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
