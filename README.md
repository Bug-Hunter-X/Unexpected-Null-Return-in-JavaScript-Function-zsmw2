# Unexpected Null Return in JavaScript Function

This repository demonstrates a common, yet subtle, bug in JavaScript involving null value handling within a function.  The `foo` function returns `null` if either input is `null`, which might not be the intended behavior in all cases.  A more robust solution is presented to improve the function's reliability and clarity.

## Bug Description

The `foo` function, as initially written, immediately returns `null` if either input `a` or `b` is `null`. While this might seem straightforward, it can lead to unexpected behavior in applications where `null` might represent a different meaning (e.g., a missing value that should be treated as 0).  The primary issue lies in the lack of flexibility in how `null` values are interpreted.

## Solution

The improved `foo` function offers two enhancements: it allows you to specify a default value for `null` inputs and it adds input validation to increase robustness and prevent unexpected behaviour.