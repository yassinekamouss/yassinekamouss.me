import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-[13px] text-balance text-muted-foreground">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>
        <p className="mb-4 px-4 text-center font-mono text-[13px] text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://x.com/YKamouss17826"
            target="_blank"
            rel="noopener"
          >
            Yassine Kamouss
          </a>{" "}
          • Source code on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
