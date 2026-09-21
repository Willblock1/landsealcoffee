# Land Seal Coffee

Custom Shopify theme for **Land Seal Coffee Roasters**, a small-batch, whole-bean coffee brand based in Indianapolis.

The storefront introduces the current roast, tells the Land Seal story, and connects customers to Shopify product, cart, and checkout flows.

## What's included

- Homepage with a featured coffee product, brand story, and brewing FAQ.
- Product page with variant selection, quantity, and add-to-cart form.
- Cart template.
- Shared header, footer, styles, and lightweight JavaScript.
- Theme editor settings for the featured product, roast level, and brewing method.

Built with Shopify Liquid, JSON templates, CSS, and vanilla JavaScript. There is no package manifest or separate frontend build step in this repository.

## Repository structure

| Path | Purpose |
| --- | --- |
| `assets/theme.css` | Storefront styling |
| `assets/theme.js` | Product form submission feedback |
| `assets/land-seal-logo.png` | Brand logo |
| `layout/theme.liquid` | Shared page layout, fonts, metadata, and assets |
| `sections/land-seal-home.liquid` | Homepage content and featured product settings |
| `sections/main-product.liquid` | Product page |
| `sections/main-cart.liquid` | Cart page |
| `sections/header.liquid`, `sections/footer.liquid` | Shared navigation and footer |
| `templates/` | Homepage, product, and cart JSON templates |
| `config/settings_schema.json` | Theme metadata |
| `locales/en.default.json` | English locale data |
| `shopify.theme.toml` | Default Shopify CLI store: `landsealcoffee.myshopify.com` |

## Local development

You need Git, [Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli), and access to a Shopify store with permission to work on its themes. Follow Shopify's CLI installation guide for current runtime requirements.

Clone the repository:

```sh
git clone https://github.com/Willblock1/landsealcoffee.git
cd landsealcoffee
```

Start a development preview, for the Land Seal Coffee store:

```sh
shopify theme dev --store landsealcoffee.myshopify.com
```

Follow the authentication prompts and open the preview or theme editor link returned by the CLI. The preview uses Shopify store data; opening the Liquid files directly in a browser will not render the storefront.

See the [theme dev reference](https://shopify.dev/docs/api/shopify-cli/theme/theme-dev) for preview options.

## Configure the current roast

In the preview's theme editor:

1. Open the homepage.
2. Select the **Land Seal storefront** section.
3. Choose a product under **Current coffee product**.
4. Set **Roast level** and **Best for**.
5. Save and check the preview.

The featured product supplies its title, price, description, variants, and availability from Shopify. Publish the product to the Online Store sales channel so it is available to the theme. If no product is selected or accessible, the homepage displays a customer-facing availability message.

The repository does not yet select a featured product in `templates/index.json`. Choose the actual product in the theme editor once it is available; no sample product handle or variant ID is hard-coded.

Manage product details and inventory in Shopify. The brand story, FAQ, origin list, and shipping copy are currently written directly in `sections/land-seal-home.liquid`; edit that file to change them.

## Validation

Run Shopify's static theme checks from the repository root:

```sh
shopify theme check
```

See the [Theme Check command reference](https://shopify.dev/docs/api/shopify-cli/theme/theme-check).

Before publishing storefront changes, preview the homepage, a product page, and the cart on desktop and mobile. Check product selection, sold-out states, quantities, add-to-cart behavior, and the checkout link.

This repository currently has no automated test suite or CI workflow. A development preview does not publish the theme; review and publish through your store's theme workflow when ready.
