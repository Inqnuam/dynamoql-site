import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DynamoQL",
  tagline: "Transforming DynamoDB Complexity into Developer Simplicity.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://inqnuam.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/dynamoql-site/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "inqnuam", // Usually your GitHub org/user name.
  projectName: "dynamoql", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  clientModules: ["./src/scripts/typeLink.ts"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "DynamoQL",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },

        {
          href: "https://github.com/inqnuam/dynamoql",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intro",
              to: "/docs/intro",
            },
            {
              label: "Schema",
              to: "/docs/category/schema",
            },
            {
              label: "Model",
              to: "/docs/category/model",
            },
            {
              label: "FAQ",
              to: "/docs/FAQ",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/inqnuam/dynamoql",
            },
            {
              label: "Edit Docs",
              href: "https://github.com/inqnuam/dynamoql-site",
            },
          ],
        },
      ],
      copyright: "Built with Docusaurus.",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "err",
        },
        {
          className: "d-type string-type",
          line: "StringType",
        },
        {
          className: "d-type number-type",
          line: "NumberType",
        },
        {
          className: "d-type boolean-type",
          line: "BooleanType",
        },
        {
          className: "d-type array-type",
          line: "ArrayType",
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
