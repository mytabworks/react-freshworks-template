# Setup your computer

https://developers.freshdesk.com/v2/docs/quick-start/

# Quick start

## Run locally
https://developers.freshdesk.com/v2/docs/quick-start/#test_your_app

"yarn start" or "npm run start" - run the .env (production) locally(localhost /dev mode)
"yarn start:dev" or "npm run start:dev" - run the .env.development locally(localhost /dev mode)

## Pack or Build app
https://developers.freshdesk.com/v2/docs/quick-start/#validate_and_pack

"yarn build" or "npm run build" - To pack the app for submission in .env (production)
"yarn build:staging" or "npm run build:staging" - To pack the app for submission in .env.development
"yarn build:uat" or "npm run build:uat" - To pack the app for submission in .env.uat

# Built using SPA

You can look on this for [more](https://fdk-spa-integration.netlify.app/react/#usage-of-existing-frontend-platform-features-in-react)

# Manifest.json

You can target your plugin base on your "product" content 

The "location" is where do you want to put your custom app is. 

The "events" is use for severless app for web hooks. check [freshdesk](https://developers.freshdesk.com/v2/docs/your-first-serverless-app/#) [freshsale](https://developers.freshworks.com/crm/docs/app-setup-events/)

## Freshsale

UI style guide https://developers.freshworks.com/crm/docs/ui-style-guide/

when you are targeting Freshsale for example you can use "freshworks_crm"

"full_page_app" - The app icon is displayed on the left navigation pane and when clicked, the app page occupies the entire viewport.

"left_nav_cti" - The app runs in the background and the app icon is displayed at the bottom-left corner. This location is allocated for an app that uses the Computer Telephony Integration (CTI) technology.

"sales_account_entity_menu" - The app is displayed in the Account details section of the account details page.

"deal_entity_menu" - The app is displayed in the Deal details section of the deal details page.

"contact_entity_menu" - The app is displayed in the left navigation pane of a contact details window.

check here for more [here](https://developers.freshworks.com/crm/docs/placeholders/)

```js
{
  "platform-version": "2.3",
  "product": {
    "freshworks_crm": {
      "location": {
        "left_nav_cti": {
          "url": "index.html",
          "icon": "icon.svg"
        }
      }
    }
  },
  "engines": {
    "node": "18.16.1",
    "fdk": "9.0.2"
  }
}
```

## Freshdesk

UI style guide https://developers.freshdesk.com/v2/docs/ui-style-guide/

when you are targeting Freshdesk for example you can use "freshdesk"

"full_page_app" - The app icon is displayed in the global sidebar and when clicked occupies the entire viewport.

"cti_global_sidebar" - The computer telephony integration (CTI) placeholder is available in the global sidebar, so a CTI app can be rendered in all pages. The default width and height of the app is 400px.

"ticket_sidebar" - The app is displayed in the right sidebar on the Ticket Details page and is loaded only after you click

"ticket_requester_info" - The app is displayed on the Contact Details tab and is loaded as soon as the page loads.

"ticket_top_navigation" - The app is displayed on the top navigation bar on the Ticket Details page.

"ticket_attachment" - The app is displayed when you click the attachment icon in a ticket conversation editor on the

"ticket_conversation_editor" - The app is displayed in the ticket conversation editor on the Ticket Details page.

check here for more [here](https://developers.freshdesk.com/v2/docs/placeholders/)

```js
{
  "platform-version": "2.3",
  "product": {
    "freshdesk": {
      "location": {
        "full_page_app": {
          "url": "index.html",
          "icon": "icon.svg"
        }
      }
    }
  },
  "engines": {
    "node": "18.16.1",
    "fdk": "9.0.2"
  }
}
```