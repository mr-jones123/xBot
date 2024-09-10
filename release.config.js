export default {
	branches: ["main"],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release/changelog",
			{
				changelogFile: "docs/CHANGELOG.md",
			},
		],
		["@semantic-release/npm",{
			"npmPublish" : false,
		}],
		"@semantic-release/github",
		[
			"@semantic-release/git",
			{
				assets: ["docs/CHANGELOG.md", "package.json", "pnpm-lock.yaml"],
				message:
					"chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
			},
		],
	],
};
