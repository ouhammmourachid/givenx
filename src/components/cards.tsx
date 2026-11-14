import Link from "next/link";
import type { Insight, Story } from "@/content/site";
import Art from "./Art";
import { formatDate } from "./ui";

export function StoryCard({ story, className = "" }: { story: Story; className?: string }) {
  return (
    <Link href={`/success-stories/${story.slug}`} className={`group block ${className}`}>
      <Art seed={story.art} className="aspect-[4/3] w-full" />
      <div className="mt-5 flex items-center gap-3 text-sm text-slate">
        <span className="rounded-[3px] bg-paper px-2 py-1 font-medium text-midnight">{story.tag}</span>
        <span>{story.sector}</span>
      </div>
      <h3 className="wide mt-3 text-xl font-semibold leading-snug">
        <span className="link-line">{story.title}</span>
      </h3>
      <p className="mt-2 text-[15px] text-slate">{story.summary}</p>
    </Link>
  );
}

export function InsightCard({ insight, className = "" }: { insight: Insight; className?: string }) {
  return (
    <Link href={`/insights/${insight.slug}`} className={`group flex flex-col ${className}`}>
      <Art seed={insight.art} className="aspect-[16/10] w-full" />
      <p className="mt-5 text-sm text-slate">
        {insight.type}, {formatDate(insight.date)}
      </p>
      <h3 className="wide mt-2 text-xl font-semibold leading-snug">
        <span className="link-line">{insight.title}</span>
      </h3>
      <p className="mt-2 text-[15px] text-slate">{insight.excerpt}</p>
    </Link>
  );
}
