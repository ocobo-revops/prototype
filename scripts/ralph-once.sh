#!/bin/bash

claude --permission-mode acceptEdits "@stories.json @progress.txt \
1. Read the stories.json and progress.txt files. \
2. Find the next incomplete task and implement it. \
3. Check any feedback loops, such as types and tests. \
4. Review your code for any issues or improvements. \
5. Commit your changes. \
6. Update progress.txt with what you did and append stories.json with the completed task."