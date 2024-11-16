import Image from "next/image";
import GetStartedImage from "@/public/images/1.png";

const GetStartedSection = () => {
  return (
    <section
      className={"space-y-[2.5rem] *:m-auto md:col-start-1 md:col-end-3"}
    >
      <h4 className={"text-xl md:text-3xl text-primary font-bold text-center"}>
        How to get started?
      </h4>
      <article
        className={
          "bg-[#A94949] p-4 space-y-4 rounded-3xl max-w-[50rem] md:flex md:p-9 md:items-center md:justify-evenly"
        }
      >
        <div className="md:flex-1 md:max-w-72 space-y-4">
          <h4 className={"text-base md:text-3xl font-bold"}>
            Sign Up and create your own store hassle-free.
          </h4>
          <p className={"text-sm md:text-lg"}>
            Join us via google signin and verify your influencer status by
            entering your social media Id and unlock your store @ zero cost.
          </p>
        </div>
        <Image
          className={"m-auto md:m-0 md:max-w-52 md:flex-1"}
          src={GetStartedImage}
          alt={"get started page"}
        ></Image>
      </article>
    </section>
  );
};

export default GetStartedSection;
