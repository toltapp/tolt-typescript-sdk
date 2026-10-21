export default {
  branches: ["main"],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset: "conventionalcommits" }],
    ["@semantic-release/release-notes-generator", { preset: "conventionalcommits" }],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "sed -i -E 's#\"tolt-typescript/[^\"]*\"#\"tolt-typescript/${nextRelease.version}\"#' src/BaseClient.ts && { grep -q '\"tolt-typescript/${nextRelease.version}\"' src/BaseClient.ts || { echo 'User-Agent tolt-typescript/${nextRelease.version} not found in src/BaseClient.ts' >&2; exit 1; }; }",
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json", "src/BaseClient.ts"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};
