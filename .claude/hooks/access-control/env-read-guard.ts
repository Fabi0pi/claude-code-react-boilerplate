import type { PreToolUseHookInput } from "@anthropic-ai/claude-agent-sdk";

interface ToolInputWithPaths {
  file_path?: string;
  path?: string;
  command?: string;
}

const ENV_PATH_REGEX = /(^|\/)\.env(\.|$)/;
const ENV_CMD_REGEX = /(^|[\s/'"])\.env(\.|[\s'"]|$)/;

async function main() {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) chunks.push(chunk);

  const input: PreToolUseHookInput = JSON.parse(
    Buffer.concat(chunks).toString()
  );

  const toolInput = input.tool_input as ToolInputWithPaths;
  const readPath = toolInput.file_path ?? toolInput.path ?? "";
  const command = toolInput.command ?? "";

  const blocked =
    (readPath && ENV_PATH_REGEX.test(readPath)) ||
    (command && ENV_CMD_REGEX.test(command));

  if (blocked) {
    console.error(
      "Accesso a file .env bloccato dall'hook env-read-guard. " +
        "Se serve davvero, chiedi all'utente di rimuovere il blocco."
    );
    process.exit(2);
  }
}

main();
