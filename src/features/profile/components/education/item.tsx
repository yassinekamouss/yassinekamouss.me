import dayjs from "dayjs";
import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  GraduationCapIcon,
} from "lucide-react";

import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Prose } from "@/components/ui/typography";

import type { EducationEntry } from "../../types/education";

export function EducationItem({
  className,
  entry,
  defaultOpen = false,
}: {
  className?: string;
  entry: EducationEntry;
  defaultOpen?: boolean;
}) {
  const canExpand =
    !!entry.description || (entry.skills && entry.skills.length > 0);

  return (
    <Collapsible disabled={!canExpand} defaultOpen={defaultOpen} asChild>
      <div className={className}>
        <div className="flex items-center">
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center text-muted-foreground"
            aria-hidden
          >
            <GraduationCapIcon className="size-5" />
          </div>

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="group/edu flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {entry.institution}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <dl>
                    <dt className="sr-only">Degree</dt>
                    <dd>{entry.degree}</dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />

                  <dl>
                    <dt className="sr-only">Period</dt>
                    <dd>
                      <time dateTime={dayjs(entry.period.start).toISOString()}>
                        {dayjs(entry.period.start).format("MM.YYYY")}
                      </time>
                      {" – "}
                      <time
                        dateTime={(entry.period.end
                          ? dayjs(entry.period.end)
                          : dayjs()
                        ).toISOString()}
                      >
                        {entry.period.end
                          ? dayjs(entry.period.end).format("MM.YYYY")
                          : "Present"}
                      </time>
                    </dd>
                  </dl>

                  {entry.location && (
                    <>
                      <Separator
                        className="data-[orientation=vertical]:h-4"
                        orientation="vertical"
                      />
                      <dl>
                        <dt className="sr-only">Location</dt>
                        <dd>{entry.location}</dd>
                      </dl>
                    </>
                  )}
                </div>
              </div>

              {canExpand && (
                <div
                  className="shrink-0 text-muted-foreground [&_svg]:size-4"
                  aria-hidden
                >
                  <ChevronsDownUpIcon className="hidden group-data-[state=open]/edu:block" />
                  <ChevronsUpDownIcon className="hidden group-data-[state=closed]/edu:block" />
                </div>
              )}
            </CollapsibleTrigger>
          </div>
        </div>

        {canExpand && (
          <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <Prose className="border-t border-dashed border-edge p-4">
              {entry.description && <Markdown>{entry.description}</Markdown>}
              {entry.skills && entry.skills.length > 0 && (
                <>
                  <h4>Skills</h4>
                  <ul>
                    {entry.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </>
              )}
            </Prose>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
}
