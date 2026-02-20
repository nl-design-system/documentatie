#!/usr/bin/env bash

# This scipt can be used to track the progress of pages available in Astro
# It requires the tool `xq` to be available.
# See: https://github.com/sibprogrammer/xq

# Make sure to run `pnpm run build` first

if [ -z "$1" ]
  then
    FILTER="/"
  else
    FILTER=$1
fi

# Directory that holds the sitemap files – change if needed
SITEMAP_DIR_ASTTRO="./packages/website/dist"

# Output destination – set to /dev/stdout to just print
OUTPUT_ASTRO="astro-locs.txt"
OUTPUT_DOCU="docusaurus-locs.txt"

# Empty the output file (or create it) before we start
> "$OUTPUT_ASTRO"
> "$OUTPUT_DOCU"

fd sitemap ./packages/website/dist --exec xq -q loc >> $OUTPUT_ASTRO;
sort $OUTPUT_ASTRO > /tmp/null
grep -v 'sitemap-' $OUTPUT_ASTRO >> temp && mv temp $OUTPUT_ASTRO

xq -q loc ./build/sitemap.xml >> $OUTPUT_DOCU
sort $OUTPUT_DOCU > /tmp/null


echo "Missing pages:"
diff -u $OUTPUT_DOCU $OUTPUT_ASTRO | grep '^-https' | grep "${FILTER}"

echo ""
echo "Extra pages:"
diff -u $OUTPUT_DOCU $OUTPUT_ASTRO | grep '^+https' | grep "${FILTER}"

echo ""
echo "Total missing pages:"
diff -u $OUTPUT_DOCU $OUTPUT_ASTRO | grep '^-https' | grep "${FILTER}" | wc -l

echo ""
echo "Total extra pages:"
diff -u $OUTPUT_DOCU $OUTPUT_ASTRO | grep '^+https' | grep "${FILTER}" | wc -l

rm $OUTPUT_ASTRO $OUTPUT_DOCU
