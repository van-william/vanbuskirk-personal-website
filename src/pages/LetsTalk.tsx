import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";

const conversationTracks = [
  {
    id: "overview",
    label: "Let's Talk",
    videoUrl: "https://www.loom.com/embed/5d49b7358829445a8a71043316b6668e",
    introMarkdown: `### Welcome to Let's Talk: Augmented Therapy\n\nLet's Talk is a platform for patients and therapists to improve upon cognitive behavior therapy (CBT) sessions through AI-powered tools.`,
    summaryMarkdown: `# Learn More About Let's Talk\n\nGet started at [lets-talk.site](https://lets-talk.site)`,
  },
  {
    id: "patient",
    label: "User Demo",
    videoUrl: "https://www.loom.com/embed/d9f9cbc489804a54adea6d045355072d",
    introMarkdown: `### User Overview\n\nLet's Talk streamlines CBT journaling with easy tracking and helpful prompts`,
    summaryMarkdown: `# Learn More About Let's Talk\n\nGet started at [lets-talk.site](https://lets-talk.site)`,
  },
  {
    id: "therapist",
    label: "Therapist Demo",
    videoUrl: "https://www.loom.com/embed/16359e01652f475793f3be17f659c9a6",
    introMarkdown: `### Therapist Overview\n\nTherapists have a portal to easily track patient progress, alerts, and more.`,
    summaryMarkdown: `# Learn More About Let's Talk\n\nGet started at [lets-talk.site](https://lets-talk.site)`,
  },
];

const LetsTalk = () => {
  const defaultTrack = conversationTracks[0]?.id ?? "overview";

  return (
    <Tabs defaultValue={defaultTrack} className="w-full">
      <PageHeader title="Let's Talk" className="py-8 md:py-14">
        <TabsList className="flex h-auto w-full flex-wrap gap-2 bg-transparent p-0 text-foreground">
          {conversationTracks.map((track) => (
            <TabsTrigger
              key={track.id}
              value={track.id}
              className="rounded-full border border-input bg-background px-5 py-2 text-base font-medium transition-colors data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {track.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </PageHeader>

      <Section className="pt-4 pb-16 md:pt-6 md:pb-20">
        <div className="max-w-5xl mx-auto space-y-6">
          {conversationTracks.map((track) => (
            <TabsContent key={track.id} value={track.id} className="mt-0 space-y-6">
              <div className="space-y-6">
                {track.introMarkdown && (
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{track.introMarkdown}</ReactMarkdown>
                  </div>
                )}

                <div
                  className="relative w-full overflow-hidden rounded-xl border border-border bg-black/5 dark:bg-white/5"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={`${track.videoUrl}?autoplay=0`}
                    frameBorder={0}
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    title={`${track.label} video overview`}
                  />
                </div>

                {track.summaryMarkdown && (
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{track.summaryMarkdown}</ReactMarkdown>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </div>
      </Section>
    </Tabs>
  );
};

export default LetsTalk;
