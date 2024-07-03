# Linting React Components in Astro with ESLint 9

ESLint changed their configuration format when updating v9, and with that, new
bugs arise.

React components cannot be linted when used within an Astro file when `<script>`
tags are present, meaning you could pass arbitrary data to properties and ESLint
will not raise warnings/errors when it should.
