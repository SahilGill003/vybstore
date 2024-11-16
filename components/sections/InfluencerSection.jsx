import Image from "next/image";
import InfluencerImage1 from "@/public/images/_ (2) 1.png";
import InfluencerImage2 from "@/public/images/PIN_ᷢ𝄞⃝🇮🇳🇹ͣᴇᷞᴅͦᴅᷡʏͤ𝄞⃝🖤 1.png";
import InfluencerImage3 from "@/public/images/profile.png";
const InfluencerSection = () => {
  return (
    <section
      id={"influencers"}
      className={"space-y-4 md:col-start-1 md:col-end-3"}
    >
      <h4 className={"text-primary text-center text-2xl md:text-3xl font-bold"}>
        Our Influencers
      </h4>
      <div className={"flex items-center justify-evenly between"}>
        <Image
          className={"rounded-full w-1/4"}
          src={InfluencerImage1}
          alt={"Influencer image"}
        />
        <Image
          className={"rounded-full w-1/4"}
          src={InfluencerImage2}
          alt={"Influencer image"}
        />
        <Image
          className={"rounded-full w-1/4"}
          src={InfluencerImage3}
          alt={"Influencer image"}
        />
      </div>
    </section>
  );
};

export default InfluencerSection;
