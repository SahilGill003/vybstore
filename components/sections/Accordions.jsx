import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Accordions() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-left *:bg-white *:rounded-lg text-primary_text space-y-2"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold px-3 text-base">
          How does the VYB Store work?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          VYB Store is an influencer marketplace. You can monetize your travel
          itinerary, merchandise, digital content, and fashion brand. And much
          more yet to come.{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold px-3 text-base">
          How do I get started with the VYB Store?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          Getting started with VYB Store is super easy! Simply sign up for an
          account, create your store, and start sharing your store link in your
          Instagram bio with the audience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold text-base px-3">
          What does “Zero Cost” mean?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          Zero cost means vybing with us is completely free. You don’t have to
          pay a single rupee to build your store and monetize your audience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-bold text-base px-3">
          How do I track my earnings on VYB Store?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          We provide you with detailed analytics to track your earnings and
          performance. You can see how many purchases your links have generated,
          as well as your total earnings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="font-bold text-base px-3">
          What kind of products can I sell on VYB Store?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          You can sell a variety of products on VYB Store, including physical
          merchandise, digital downloads, and even services like travel
          itineraries and plenty more.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="font-bold px-3 text-base">
          How do I withdraw my earnings?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          We offer various payout options, including bank transfers. In the
          earning section under your profile click the withdraw button to
          withdraw your earnings. Withdrawal will be available every 14 days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="font-bold px-3 text-base">
          How can I get support if I have any questions or issues?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          If you have any questions or issues, you can reach out to VYB Store's
          customer support team via email at support@vybstore.com. We're here to
          help you succeed!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="font-bold px-3 text-base">
          Do I need technical skills to use the platform?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          No, not at all! Our platform is designed with user-friendliness in
          mind. You can easily navigate and set up your store without any
          technical expertise. It's as simple as a few clicks to get started!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="font-bold px-3 text-base">
          We didn't find any account with those login credentials?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          You did google Sign in for the first time, so now "Reset Password" on
          login page. You will receive magic link on the email. Use that link to
          change your password. Happy Vybing!{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger className="font-bold px-3 text-base">
          This email is already in use?
        </AccordionTrigger>
        <AccordionContent className="px-3 text-base">
          You did email login first time. So, you probably need to connect
          Google. You can do email login and go to profile section and press
          "Connect Google". Next time you should be able to do Google login
          seamlessly. in case you've forgotten the password, press "Reset
          Password"
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
