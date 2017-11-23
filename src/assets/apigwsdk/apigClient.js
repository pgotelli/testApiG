/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }


    // extract endpoint and path from url
    var invokeUrl = 'https://api.anyservice.cloud/test';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);



    apigClient.autocompleteGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['filter', 'table'], ['body']);

        var autocompleteGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/autocomplete').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['filter', 'table']),
            body: body
        };


        return apiGatewayClient.makeRequest(autocompleteGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.autocompleteOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var autocompleteOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/autocomplete').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(autocompleteOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.calendarGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var calendarGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/calendar').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(calendarGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.calendarOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var calendarOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/calendar').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(calendarOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.devicetokenPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var devicetokenPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/devicetoken').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(devicetokenPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.devicetokenOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var devicetokenOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/devicetoken').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(devicetokenOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.directoryGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var directoryGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/directory').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(directoryGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.directoryOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var directoryOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/directory').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(directoryOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.emailvalidationOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var emailvalidationOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/emailvalidation').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(emailvalidationOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.emailvalidationActivationcodeGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['activationcode'], ['body']);

        var emailvalidationActivationcodeGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/emailvalidation/{activationcode}').expand(apiGateway.core.utils.parseParametersToObject(params, ['activationcode'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(emailvalidationActivationcodeGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.emailvalidationActivationcodeOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var emailvalidationActivationcodeOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/emailvalidation/{activationcode}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(emailvalidationActivationcodeOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externaljobsPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externaljobsPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/externaljobs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externaljobsPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externaljobsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externaljobsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/externaljobs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externaljobsPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externaljobsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externaljobsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/externaljobs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externaljobsOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externalsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externalsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/externals').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externalsGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externalsPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externalsPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/externals').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externalsPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externalsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externalsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/externals').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externalsPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externalsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externalsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/externals').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externalsOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externaltasksPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externaltasksPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/externaltasks').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externaltasksPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.externaltasksOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var externaltasksOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/externaltasks').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(externaltasksOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.i18nGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['tag', 'phraseId', 'i18nCode'], ['body']);

        var i18nGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/i18n').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['tag', 'phraseId', 'i18nCode']),
            body: body
        };


        return apiGatewayClient.makeRequest(i18nGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.i18nPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var i18nPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/i18n').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(i18nPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.i18nOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var i18nOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/i18n').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(i18nOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.iotchatPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var iotchatPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/iotchat').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(iotchatPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.jobsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['projectId', 'jobId'], ['body']);

        var jobsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/jobs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['projectId', 'jobId']),
            body: body
        };


        return apiGatewayClient.makeRequest(jobsGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.jobsPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var jobsPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/jobs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(jobsPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.jobsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var jobsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/jobs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(jobsPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.jobsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var jobsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/jobs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(jobsOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.jobsListGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['userId'], ['body']);

        var jobsListGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/jobs/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userId']),
            body: body
        };


        return apiGatewayClient.makeRequest(jobsListGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.jobsListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var jobsListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/jobs/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(jobsListOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.jobsWatchersPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var jobsWatchersPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/jobs/watchers').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(jobsWatchersPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.jobsWatchersOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var jobsWatchersOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/jobs/watchers').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(jobsWatchersOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['project'], ['body']);

        var membersGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/members').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['project']),
            body: body
        };


        return apiGatewayClient.makeRequest(membersGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'], ['body']);

        var membersOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/members').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(membersOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersConfirmOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'], ['body']);

        var membersConfirmOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/members/confirm').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(membersConfirmOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersConfirmActivationcodeGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['activationcode'], ['body']);

        var membersConfirmActivationcodeGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/members/confirm/{activationcode}').expand(apiGateway.core.utils.parseParametersToObject(params, ['activationcode'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(membersConfirmActivationcodeGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersConfirmActivationcodeOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var membersConfirmActivationcodeOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/members/confirm/{activationcode}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(membersConfirmActivationcodeOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersInvitePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var membersInvitePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/members/invite').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(membersInvitePostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersInviteOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'], ['body']);

        var membersInviteOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/members/invite').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(membersInviteOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersRemovePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var membersRemovePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/members/remove').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(membersRemovePostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.membersRemoveOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'], ['body']);

        var membersRemoveOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/members/remove').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(membersRemoveOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectFilesListGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['projectId', 'jobId', 'taskId'], ['body']);

        var projectFilesListGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/projectFiles/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['projectId', 'jobId', 'taskId']),
            body: body
        };


        return apiGatewayClient.makeRequest(projectFilesListGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectFilesRemoveDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['key'], ['body']);

        var projectFilesRemoveDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/projectFiles/remove').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['key']),
            body: body
        };


        return apiGatewayClient.makeRequest(projectFilesRemoveDeleteRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectfilesListGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var projectfilesListGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/projectfiles/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(projectfilesListGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectfilesRemoveDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var projectfilesRemoveDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/projectfiles/remove').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(projectfilesRemoveDeleteRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['projectId'], ['body']);

        var projectsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/projects').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['projectId']),
            body: body
        };


        return apiGatewayClient.makeRequest(projectsGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectsPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var projectsPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/projects').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(projectsPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var projectsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/projects').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(projectsPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'], ['body']);

        var projectsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/projects').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(projectsOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectsListGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var projectsListGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/projects/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(projectsListGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.projectsListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var projectsListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/projects/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(projectsListOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.registeriotPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var registeriotPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/registeriot').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(registeriotPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.registeriotOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var registeriotOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/registeriot').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(registeriotOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.smtemplatesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var smtemplatesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/smtemplates').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(smtemplatesGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.smtemplatesPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var smtemplatesPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/smtemplates').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(smtemplatesPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.smtemplatesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var smtemplatesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/smtemplates').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(smtemplatesPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.smtemplatesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var smtemplatesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/smtemplates').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(smtemplatesOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.smtemplatesClonePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var smtemplatesClonePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/smtemplates/clone').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(smtemplatesClonePostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.smtemplatesCloneOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var smtemplatesCloneOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/smtemplates/clone').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(smtemplatesCloneOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.smtemplatesListGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var smtemplatesListGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/smtemplates/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(smtemplatesListGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.smtemplatesListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var smtemplatesListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/smtemplates/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(smtemplatesListOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.statemachinesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var statemachinesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/statemachines').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(statemachinesGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.statemachinesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var statemachinesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/statemachines').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(statemachinesPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.statemachinesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var statemachinesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/statemachines').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(statemachinesOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.statemachinesCopyPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var statemachinesCopyPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/statemachines/copy').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(statemachinesCopyPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.statemachinesCopyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var statemachinesCopyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/statemachines/copy').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(statemachinesCopyOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.statemachinesTotemplatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var statemachinesTotemplatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/statemachines/totemplate').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(statemachinesTotemplatePostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.statemachinesTotemplateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var statemachinesTotemplateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/statemachines/totemplate').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(statemachinesTotemplateOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var taskGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/task').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var taskPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/task').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var taskPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/task').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var taskOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/task').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskListGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['jobId'], ['body']);

        var taskListGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/task/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['jobId']),
            body: body
        };


        return apiGatewayClient.makeRequest(taskListGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskListPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var taskListPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/task/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskListPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskListOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var taskListOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/task/list').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskListOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskdefinitionGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['projectId', 'taskId'], ['body']);

        var taskdefinitionGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/taskdefinition').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['projectId', 'taskId']),
            body: body
        };


        return apiGatewayClient.makeRequest(taskdefinitionGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskdefinitionPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var taskdefinitionPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/taskdefinition').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskdefinitionPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskdefinitionPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var taskdefinitionPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/taskdefinition').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskdefinitionPostRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.taskdefinitionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var taskdefinitionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/taskdefinition').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(taskdefinitionOptionsRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.userpositionGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['from', 'userId', 'to'], ['body']);

        var userpositionGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/userposition').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['from', 'userId', 'to']),
            body: body
        };


        return apiGatewayClient.makeRequest(userpositionGetRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.userpositionPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

        var userpositionPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/userposition').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(userpositionPutRequest, authType, additionalParams, config.apiKey);
    };


    apigClient.userpositionOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }

        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

        var userpositionOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/userposition').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };


        return apiGatewayClient.makeRequest(userpositionOptionsRequest, authType, additionalParams, config.apiKey);
    };


    return apigClient;
};
