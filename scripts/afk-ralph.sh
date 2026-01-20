#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <iterations>"
  exit 1
fi

for ((i=1; i<=$1; i++)); do
  echo "=== Iteration $i/$1 ==="

  if ! result=$(claude --permission-mode acceptEdits -p "@stories.json @progress.txt \
  1. Decide which task to work on next. \
  This should be the one YOU decide has the highest priority, \
  - not necessarily the first in the list. \
  2. Check any feedback loops, such as types and tests. \
  3. Update the stories.json with what was done. \
  4. Append your progress to the progress.txt file. \
  5. Make a git commit of that feature. \
  ONLY WORK ON A SINGLE FEATURE. \
  If, while implementing the feature, you notice that all work \
  is complete, output <promise>COMPLETE</promise>. \
  " 2>&1); then
    echo "ERROR: claude command failed on iteration $i"
    exit 1
  fi

  echo "$result"

  if [[ "$result" == *"<promise>COMPLETE</promise>"* ]]; then
    echo "stories.json complete after $i iterations."
    exit 0
  fi

  echo ""
done

echo "Completed $1 iterations without reaching COMPLETE state."