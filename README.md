# The Excuse That Almost Works

[![Bounty](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme)
[![Rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/satriax30-commits/makefun-excuse-almost-works/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme)
[![Reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/satriax30-commits/makefun-excuse-almost-works/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme)

This program writes a single one-line excuse — the text a gamer sends their boss to skip work on GTA 6 launch week — to `/output/entry.txt`. It is fully deterministic: it takes no input, reads no clock, uses no randomness and makes no network calls, so every run produces the exact same 106-byte file.

## Run

```sh
node main.ts
```

The entry is written to `/output/entry.txt` (override the directory with the `OUTPUT_DIR` environment variable).
