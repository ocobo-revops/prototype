#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <iterations>"
  exit 1
fi

for ((i=1; i<=$1; i++)); do
  echo "=== Iteration $i/$1 ==="

  if ! result=$(claude --permission-mode acceptEdits -p "@stories.json @progress.txt \
  1. Find the highest-priority task and implement it. \
  2. Run your tests and type checks. \
  3. Update the stories.json with what was done. \
  4. Append your progress to progress.txt. \
  5. Commit your changes. \
  ONLY WORK ON A SINGLE TASK. \
  If the stories.json is complete, output <promise>COMPLETE</promise>." 2>&1); then
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