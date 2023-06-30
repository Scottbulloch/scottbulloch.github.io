// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Snow Docs',
  tagline: 'Documentation to help you configure and use Snow Software products',
  url: 'https://docs-app.dev-snowsoftware.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Snow Software', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  noIndex: true, // This option adds <meta name="robots" content="noindex, nofollow"> to every page to tell search engines to avoid indexing the site. Remove this when going into production.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo. TD- Hiding this. It allows the Edit this page link on pages
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo. TD- Hiding this. It allows the Edit this page link on pages
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }), 
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'sam_api_applications_sample',
            spec: 'docs/atlas-api/sam-sample/applicationssample.json',
            route: 'docs/atlas-api/sam-sample/applications_sample',
          },
          {
            id: 'sam_api_computers_sample',
            spec: 'docs/atlas-api/sam-sample/computerssample.json',
            route: 'docs/atlas-api/sam-sample/computers_sample',
          },
          {
            id: 'sam_api_agreements_sample',
            spec: 'docs/atlas-api/sam-sample/agreementssample.json',
            route: 'docs/atlas-api/sam-sample/agreements_sample',
          },
          {
            id: 'sam_api_customobjects_sample',
            spec: 'docs/atlas-api/sam-sample/customobjectssample.json',
            route: 'docs/atlas-api/sam-sample/customobjects_sample',
          },
          {
            id: 'sam_api_dcc_sample',
            spec: 'docs/atlas-api/sam-sample/dccsample.json',
            route: 'docs/atlas-api/sam-sample/dcc_sample',
          },
          {
            id: 'sam_api_licenses_sample',
            spec: 'docs/atlas-api/sam-sample/licensesssample.json',
            route: 'docs/atlas-api/sam-sample/licenses_sample',
          },
          {
            id: 'sam_api_mobiledevices_sample',
            spec: 'docs/atlas-api/sam-sample/mobiledevicessample.json',
            route: 'docs/atlas-api/sam-sample/mobiledevices_sample',
          },
          {
            id: 'sam_api_oracle_sample',
            spec: 'docs/atlas-api/sam-sample/oraclesample.json',
            route: 'docs/atlas-api/sam-sample/oracle_sample',
          },
          {
            id: 'sam_api_useraccounts_sample',
            spec: 'docs/atlas-api/sam-sample/useraccountssample.json',
            route: 'docs/atlas-api/sam-sample/useraccounts_sample',
          },
          {
            // This will need to point externally when available publicly
            id: 'containers_api_containers',
            spec: 'docs/atlas-api/containers/containers.yaml',
            route: 'docs/atlas-api/containers',
          },
          {
            id: 'cloud_api_cloud_connectors',
            spec: 'https://westeurope.snowsoftware.io/api/cloudvisibility/cloud-connectors/v1/meta/http',
            // spec: 'docs/atlas-api/cloud/cloud_connectors.json',
            route: 'docs/atlas-api/cloud/connectors',
          },
          {
            id: 'cloud_api_cloud_normalizedbilling',
            spec: 'https://westeurope.snowsoftware.io/api/cloudvisibility/normalized-billing-data/v1/meta/http',
            // spec: 'docs/atlas-api/cloud/cloud_normalized_billing.json',
            route: 'docs/atlas-api/cloud/normalizedbilling',
          },
          {
            id: 'cloud_api_cloud_views',
            //spec: 'https://westeurope.snowsoftware.io/api/cloudvisibility/saved-views/v1/meta/http',
            spec: 'docs/atlas-api/cloud/cloud_saved_views.json',
            route: 'docs/atlas-api/cloud/views',
          },
          {
            // This will need to point externally when available publicly
            id: 'cloud_api_cloud_license',
            spec: 'docs/atlas-api/cloud/cloud_license.yaml',
            route: 'docs/atlas-api/cloud/license',
		      },
          {
          //This will eventually need to point to production when available
			      id: "saas_api_contracts",
            spec: "https://westeurope.dev-snowsoftware.io/api/saas/contract/meta/http",
            route: "docs/atlas-api/saas/contracts"
          },
          {
            //This will eventually need to point to production when available
			      id: "saas_api_insight_generator",
            spec: "https://westeurope.dev-snowsoftware.io/api/saas/insight-generator/meta/http",
            route: "docs/atlas-api/saas/insight-generator"
          },
          {
            //This will eventually need to point to production when available
			      id: "saas_api_system_management",
            spec: "https://westeurope.dev-snowsoftware.io/api/saas/system-management/meta/http",
            route: "docs/atlas-api/saas/system-management"
          },
          {
            //This will eventually need to point to production when available
			      id: "saas_api_consolidated_view",
            spec: "https://westeurope.dev-snowsoftware.io/api/saas/consolidated-view/meta/http",
            route: "docs/atlas-api/saas/consolidated-view"
          },
          {
            //This will eventually need to point to production when available
            id: 'partner_estate_snapshots',
            spec: 'docs/atlas-api/partner-access/snapshots.yaml',
			      //What should this route be? Everything seems to work without it, and the route for the cloud APIs isn't a real path.
            route: 'docs/atlas-api/X/X',
		      }		  
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        docsRouteBasePath: "/",
        hashed: true,
      }),
    ],
  ],
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'Snow API Docs',
      logo: {
        alt: 'Snow Docs Home',
        src: 'img/logo.svg',
      },
      items: [
        //{
        //  type: 'doc',
        //  docId: 'snow-atlas/index',
        //  position: 'left',
        //  label: 'Snow Atlas',
        //},
        //{
        //  type: 'doc',
        //  docId: 'snow-software-products/index',
        //  position: 'left',
        //  label: 'Other products',
        //},
        //{
        //  type: 'doc',
        //  docId: 'atlas-api/index',
        //  position: 'left',
        //  label: 'Developer resources',
        //},
        //{
        //  type: 'dropdown',
        //  label: 'More resources',
        //  position: 'left',
        //  items: [
        //    {
        //      type: 'doc',
        //      docId: 'release-notes/index',
        //      label: 'Release notes',
        //    },
        //    {
        //     to: '/videos',
        //      label: 'Videos',
        //    },
        //    {
        //      href: 'https://community.snowsoftware.com/s/',
        //      label: 'Community',
        //    },
        //  ],
        //},
        //{
        //  to: '/blog',
        //  label: 'Blog',
        //},
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Terms of use',
          href: 'https://www.snowsoftware.com/legal/termsofuse',
        },
        {
          label: 'Privacy policy',
          href: 'https://www.snowsoftware.com/seo/legal-privacy-policy',
        },
        {
          label: 'Data protection',
          href: 'https://www.snowsoftware.com/legal/dataprotection',
        },
        {
          label: 'Subscription center',
          href: 'https://go.snowsoftware.com/subscription-center.html',
        },
        {
          label: 'Community',
          href: 'https://community.snowsoftware.com/s/',
        },
        {
          label: 'Docs Feedback',
          href: 'mailto:docsportal-feedback@snowsoftware.com', 
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Snow Software`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  },
};

 module.exports = config;
