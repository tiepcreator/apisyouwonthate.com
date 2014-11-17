# Change Log
All notable changes to the book will be documented in this file.

## Unreleased

### Added

- Introduction: Expanded to explain that this is not just about REST, but good HTTP APIs in general, and Hypermedia.
- Chapter 4: Added a section to chapter4 about "JSON-API" and "Problem Details" standards for errors.
- Chapter 6: Mentioned "Marshmallow" and "ActiveModel Serializers" as alternatives to Fractal.
- Chapter 9: Mentioned "Doorkeeper" and made the description of `bshaffer/oauth2-server` more fair.
- Chapter 10: Talk about Pagination with the `Link` header.

### Fixed

- Chapter 4: Updated the "Error v Errors" section, as I now like Errors and the single error argument was not worth ignoring popular approach.
- Chapter 7: Side-loading examples were outdated and explained unfairly. Side-loading has some real advantages, despite annoying me on some unexplainable personal level.
- Chapter 12: Incorrectly asserted that using `.json` in URLs was not RESTful. It is however still a crappy idea for a multitude of reasons.

## 1.5.0 - 2014-11-17

### Added

- Started using versioning and added a `CHANGELOG.md`.