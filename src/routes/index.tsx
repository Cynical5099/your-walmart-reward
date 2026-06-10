import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import giftCardImage from "@/assets/giftcard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$750 Walmart Gift Card" },
      { name: "description", content: "Follow the steps to claim your Walmart reward." },
      { property: "og:title", content: "$750 Walmart Gift Card" },
      { property: "og:description", content: "Follow the steps to claim your Walmart reward." },
    ],
  }),
  component: Index,
});

const steps = [
  "Click the button below",
  "Enter your email & basic info",
  "Complete 4 to 5 required deals",
  "Receive your reward once verified",
];

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <main className="w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <img
            src={giftCardImage}
            alt="Gift card"
            className="w-full max-w-[320px] rounded-xl shadow-lg"
            width={320}
            height={200}
          />
        </div>

        <h1 className="mb-8 text-2xl font-semibold leading-snug text-foreground">
          Follow the steps below to receive your reward
        </h1>

        <ol className="mb-10 space-y-4 text-left">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              <span className="pt-1 text-base leading-relaxed text-foreground">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <Button
          size="lg"
          className="h-14 w-full rounded-full bg-accent text-lg font-bold text-accent-foreground shadow-md hover:bg-accent/90"
        >
          Get Started
        </Button>

        <p className="mt-4 text-xs text-muted-foreground">
          Available in selected countries — US, UK, AU, CA
        </p>
      </main>
    </div>
  );
}
