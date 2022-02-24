#!/bin/sh

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
    echo "Up-to-date" > status.txt
elif [ $LOCAL = $BASE ]; then
    echo "Need to pull" > status.txt
elif [ $REMOTE = $BASE ]; then
    echo "Need to push" > status.txt
else
    echo "Diverged"
fi
