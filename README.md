# ![LOGO](logo.png) Price **flow**ground Connector

## Description

A generated **flow**ground connector for the Price API (version 3.0.1).

Generated from: https://api.apis.guru/v2/specs/walmart.com/price/3.0.1/swagger.json<br/>
Generated at: 2019-05-07T17:44:49+03:00

## API Description

Please make sure you use the correct version of the APIs for your use case. To find out the appropriate version, go to the API Docs  drop down on the menu.

## Authorization

This API does not require authorization.

## Actions

### Upload a price feed

> You can upload a price feed. If the feed successfully processed, it returns a feed ID. Use the returned feed ID to retrieve a feed status. You need Your Consumer ID and the private key to upload the feed

*Tags:* `Version 3`

#### Input Parameters
* `feedType` - _required_ - Feed Type
    Possible values: price, promo.
* `WM_CONSUMER.CHANNEL.TYPE` - _required_ - Channel Type
    Possible values: SWAGGER_CHANNEL_TYPE.
* `WM_CONSUMER.ID` - _required_ - Your Consumer ID
* `WM_SEC.TIMESTAMP` - _required_ - Epoch timestamp
* `WM_SEC.AUTH_SIGNATURE` - _required_ - Authentication signature
* `WM_SVC.NAME` - _required_ - The Service name
* `WM_QOS.CORRELATION_ID` - _required_ - A Transaction ID

### Get status of a price feed

> You can display the status of an item price within a feed. Use the feed ID returned from the upload a price feed API.

*Tags:* `Version 3`

#### Input Parameters
* `feedId` - _required_ - The feed ID which status you want to retrieve.
* `includeDetails` - _optional_ - Includes details of each entity in the feed. Do not set this parameter to true.
* `offset` - _optional_ - The object response to start with, where 0 is the first entity that can be requested. It can only be used when includeDetails is set to true.
* `limit` - _optional_ - The number of entities to be returned. It cannot be more than 50 entities. Only used when includeDetails is set to true.
* `WM_CONSUMER.CHANNEL.TYPE` - _required_ - Channel Type
    Possible values: SWAGGER_CHANNEL_TYPE.
* `WM_CONSUMER.ID` - _required_ - Your Consumer ID
* `WM_SEC.TIMESTAMP` - _required_ - Epoch timestamp
* `WM_SEC.AUTH_SIGNATURE` - _required_ - Authentication signature
* `WM_SVC.NAME` - _required_ - The Service name
* `WM_QOS.CORRELATION_ID` - _required_ - A Transaction ID

## License

**flow**ground :- Telekom iPaaS / walmart-com-price-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
