import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  // contentDir: "content", // ✅ Correct content directory
  contentDirBasePath: "/docs", // ✅ This ensures URLs start from /docs
});

export default withNextra({
  reactStrictMode: true,
});
