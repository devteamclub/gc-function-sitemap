# Firebase function for sitemap.xml

## Step 1
Deploy this code to google cloud function
https://cloud.google.com/functions/docs/deploying

Set `sitemapGenerator` as entry point

## Step 2
Setup `API_SITEMAP_URL` ENV variable
https://cloud.google.com/functions/docs/configuring/env-var

## Step 3
Just add to `firebase.json`

```"rewrites": [
  {
    "source": "/sitemap.xml",
    "function": "yourFunctionName"
  },
]
