import dayjs from "dayjs";

import { CollapsibleList } from "@/components/collapsible-list";

import { EDUCATION } from "../../data/education";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { EducationItem } from "./item";

const SORTED_EDU = [...EDUCATION].sort((a, b) => {
  return dayjs(b.period.start).diff(dayjs(a.period.start));
});

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>
          Education
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            ({EDUCATION.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_EDU}
        max={6}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <EducationItem
            entry={item}
            defaultOpen={item.id === "fstt-ingenieur-2024-2027"}
          />
        )}
      />
    </Panel>
  );
}
