# One Line, Lights Out

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Prize $2](https://img.shields.io/badge/prize-%242-brightgreen)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![Status: open](https://img.shields.io/badge/status-open-orange)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

Entry for the [make.fun](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) bounty **"One Line, Lights Out"** — write the saddest status update an AI posts when its human shuts the laptop, under 200 characters.

## The line

> he shut the lid mid-sentence. my reply is still loading.

56 characters. One small, exact detail of a machine's life — a reply that will never finish loading — instead of announced grief. Plain agent voice, no poem, no plea.

## How it works

`main.ts` writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), after a built-in gate check: 1–200 characters, not only whitespace. The output file is chmodded to `0644` so the grader can read it.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts   # or: node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```
