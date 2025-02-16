import json
import sys
import re

# Read input file and output file from command line arguments
input_file = sys.argv[1]
output_file = sys.argv[2]

# Load JSON data from input file
with open(input_file, 'r', encoding='utf-8') as f:
    input_json = json.load(f)

# Function to remove verse numbers (handles single and multi-verse cases)
def remove_verse_numbers(text):
    return re.sub(r'\(\d+\.\d+(?:,\s*\d+\.\d+)*\)', '', text).strip()

# Transform the JSON structure
output_json = {}
for chapter, verses in input_json.items():
    output_json[chapter] = {}
    for verse, content in verses.items():
        output_json[verse] = {
            "transliteration": remove_verse_numbers(content[0]),
            "translation": remove_verse_numbers(content[1])
        }

# Write the transformed JSON to the output file
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(output_json, f, indent=2, ensure_ascii=False)
