/**
 * Auto-generated action file for "Price" API.
 *
 * Generated at: 2019-05-07T14:44:49.014Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / walmart-com-price-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'getFeedsStatus'
 * Endpoint Path: '/v3/feeds/{feedId}'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "feedId",
    "includeDetails",
    "offset",
    "limit",
    "WM_CONSUMER.CHANNEL.TYPE",
    "WM_CONSUMER.ID",
    "WM_SEC.TIMESTAMP",
    "WM_SEC.AUTH_SIGNATURE",
    "WM_SVC.NAME",
    "WM_QOS.CORRELATION_ID"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "feedId": "feedId",
    "includeDetails": "includeDetails",
    "offset": "offset",
    "limit": "limit",
    "WM_CONSUMER_CHANNEL_TYPE": "WM_CONSUMER.CHANNEL.TYPE",
    "WM_CONSUMER_ID": "WM_CONSUMER.ID",
    "WM_SEC_TIMESTAMP": "WM_SEC.TIMESTAMP",
    "WM_SEC_AUTH_SIGNATURE": "WM_SEC.AUTH_SIGNATURE",
    "WM_SVC_NAME": "WM_SVC.NAME",
    "WM_QOS_CORRELATION_ID": "WM_QOS.CORRELATION_ID"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'getFeedsStatus',
        pathName: '/v3/feeds/{feedId}',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}