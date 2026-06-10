import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Smartphone } from "lucide-react";
import giftCardImage from "@/assets/giftcard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$750 Walmart Gift Card" },
      { name: "description", content: "Follow the steps to claim your Walmart reward." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
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
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary to-primary/70 px-6">
        <div className="w-full max-w-md rounded-3xl bg-background p-10 text-center shadow-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-3 text-2xl font-bold text-foreground">
            Mobile only
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            This offer is only available on mobile devices. Please switch to your
            phone to continue.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background px-5 py-8">
      <main className="mx-auto w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <img
            src={giftCardImage}
            alt="$750 gift card"
            className="w-full max-w-[300px] drop-shadow-2xl"
          />
        </div>

        <h1 className="mb-2 text-[26px] font-bold leading-tight text-foreground">
          Follow the steps below to receive your reward
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          A few quick steps and you're done.
        </p>

        <ol className="mb-8 space-y-3 text-left">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              <span className="pt-1.5 text-[15px] font-medium leading-snug text-card-foreground">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <Button
          asChild
          size="lg"
          className="h-14 w-full rounded-full bg-accent text-lg font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-transform active:scale-[0.98] hover:bg-accent/90"
        >
          <a
            href="https://trksy.org/aff_c?offer_id=1157&aff_id=21664"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </Button>

        <p className="mt-4 text-xs text-muted-foreground">
          Available in selected countries — US, UK, AU, CA
        </p>
      </main>
    </div>
  );
}
