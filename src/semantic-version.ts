const SEMVER_IDENTIFIER = String.raw`(?:0|[1-9]\d*|[0-9A-Za-z-]*[A-Za-z-][0-9A-Za-z-]*)`;
const SEMVER_PRERELEASE = String.raw`(?:-${SEMVER_IDENTIFIER}(?:\.${SEMVER_IDENTIFIER})*)?`;
const SEMVER_BUILD = String.raw`(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?`;

export class SemanticVersionRegex extends RegExp {
  constructor(flags?: string) {
    super(
      new RegExp(
        String.raw`^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)${SEMVER_PRERELEASE}${SEMVER_BUILD}$`,
        flags,
      ),
    );
  }
}
