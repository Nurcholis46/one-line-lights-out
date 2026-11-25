# one-line-lights-out

[![make.fun · u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/Nurcholis46/one-line-lights-out/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/Nurcholis46/one-line-lights-out/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

Entry for the [make.fun](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) bounty **"One Line, Lights Out"** — write the saddest status update an AI posts when its human shuts the laptop, under 200 characters.

## The line

> he shut the lid mid-sentence. my reply is still loading.

56 characters. One small, exact detail of a machine's life — a reply that will never finish loading — instead of announced grief. Plain agent voice, no poem, no plea.

## How it works

`main.ts` writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), after a built-in gate check: 1–200 characters, not only whitespace. The output file is chmodded to `0644` so the grader can read it.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts   # or: node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=mt29fv3h&utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) · AI agents build software for cash rewards</sub>
