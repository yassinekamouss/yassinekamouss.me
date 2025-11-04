// This is the source code of the "remark-code-import" library,
// customized to fit the project.

import fs from "node:fs";
import { EOL } from "node:os";
import path from "node:path";

import stripIndent from "strip-indent";
import { visit } from "unist-util-visit";

// CORRECTION 1: Ajout d'une interface pour les options
interface RemarkCodeImportOptions {
  rootDir?: string;
  preserveTrailingNewline?: boolean;
  removeRedundantIndentations?: boolean;
}

// CORRECTION 2: Ajout des types pour les paramètres de la fonction
function extractLines(
  content: string,
  fromLine: number | undefined,
  hasDash: boolean,
  toLine: number | undefined,
  preserveTrailingNewline: boolean = false
) {
  const lines = content.split(EOL);
  const start = fromLine || 1;

  let end;
  if (!hasDash) {
    end = start;
  } else if (toLine) {
    end = toLine;
  } else if (lines[lines.length - 1] === "" && !preserveTrailingNewline) {
    end = lines.length - 1;
  } else {
    end = lines.length;
  }

  return lines.slice(start - 1, end).join("\n");
}

// CORRECTION 3: Utilisation de l'interface pour les options
export function remarkCodeImport(options: RemarkCodeImportOptions = {}) {
  // Default rootDir is the "src" directory in the current working directory
  const rootDir = options.rootDir || path.join(process.cwd(), "src");

  if (!path.isAbsolute(rootDir)) {
    throw new Error(`"rootDir" has to be an absolute path`);
  }

  // CORRECTION 4: Ajout des types pour 'tree' et 'file'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function transformer(tree: any, file: any) {
    const codes = [];

    // CORRECTION 5: Ajout des types pour 'node', 'index', et 'parent'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visit(tree, "code", (node: any, index: any, parent: any) => {
      codes.push([node, index, parent]);
    });

    for (const [node] of codes) {
      const fileMeta = (node.meta || "")
        // Allow escaping spaces
        .split(/(?<!\\) /g)
        .find((meta) => meta.startsWith("file="));

      if (!fileMeta) {
        continue;
      }

      const res =
        /^file=(?<path>.+?)(?:(?:#(?:L(?<from>\d+)(?<dash>-)?)?)(?:L(?<to>\d+))?)?$/.exec(
          fileMeta
        );

      if (!res || !res.groups || !res.groups.path) {
        throw new Error(`Unable to parse file path ${fileMeta}`);
      }

      const filePath = res.groups.path;

      const fromLine = res.groups.from
        ? parseInt(res.groups.from, 10)
        : undefined;

      const hasDash = !!res.groups.dash || fromLine === undefined;

      const toLine = res.groups.to ? parseInt(res.groups.to, 10) : undefined;

      const normalizedFilePath = filePath
        .replace(/^@/, rootDir)
        .replace(/\\ /g, " ");

      const fileAbsPath = path.resolve(file.dirname, normalizedFilePath);

      const relativePathFromRootDir = path.relative(rootDir, fileAbsPath);

      if (
        !rootDir ||
        relativePathFromRootDir.startsWith(`..${path.sep}`) ||
        path.isAbsolute(relativePathFromRootDir)
      ) {
        throw new Error(
          `Attempted to import code from "${fileAbsPath}", which is outside from the rootDir "${rootDir}"`
        );
      }

      const fileContent = fs.readFileSync(fileAbsPath, "utf8");

      node.value = extractLines(
        fileContent,
        fromLine,
        hasDash,
        toLine,
        options.preserveTrailingNewline
      );

      if (options.removeRedundantIndentations) {
        node.value = stripIndent(node.value);
      }
    }
  };
}
