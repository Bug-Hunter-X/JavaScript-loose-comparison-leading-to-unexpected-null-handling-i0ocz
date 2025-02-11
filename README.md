# JavaScript Loose Comparison Leading to Unexpected Null Handling

This repository demonstrates a common JavaScript bug related to loose comparison and null handling.  The `foo` function intends to return `null` only if both inputs `a` and `b` are strictly `null`. However, due to loose comparison (`==`), it returns `null` even if only one of the inputs is loosely equal (`==`) to `null` (which includes `0`, `false`, `undefined`, and the empty string).

The solution uses strict equality (`===`) to fix the issue.

## Bug
The original `foo` function uses loose comparison (`==`), resulting in unexpected behavior when one argument is 0, false, '' etc.

## Solution
The updated `foo` function uses strict equality (`===`), correctly handling null values only when both `a` and `b` are strictly null.
