import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    AuthenticationDetails,
    CognitoIdentityServiceProvider,
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool
} from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import * as awsservice from "aws-sdk/lib/service";
import * as CognitoIdentity from "aws-sdk/clients/cognitoidentity";

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

//import * as apigClientFactory from "assets/apigwsdk/apigClient.js";

//declare var apigClientFactory : any;


@Component({
  selector: 'login',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginCompComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("first console log", apigClientFactory);
    let something = apigClientFactory.newClient();

    let job = {
       "projectId": "P-RDR178",
       "externalId": "JOB10",
       "customerName": "JOB10",
       "status": "JOB_NEW",
       "requestedDueDate":1509552000000,
       "currentDueDate":1509552000000,
       "actualDuration": 1800000,
       "estimatedDuration": 1800000,
//            "latitude": -34.9137939,
//            "longitude": -57.9934855,
//            "address": "Estadio Ciudad de La Plata",
//            "city": "La Plata",
//            "state": "Buenos Aires",
//            "zipCode": "1900"
        /*"assignee": {
          "userName": "rmtest330",
          "userId": "cognito-idp.us-east-1.amazonaws.com:us-east-1_GFaGz2chu:49b2b964-116e-4467-a65e-602541498f03"
        },*/
        "taskDefinitions" : ["P-RDR178_$_1557c708-d334-4972-b2d0-56e52ba8d39e"]
    }

    this.http.post('https://aoa0zvw5v2.execute-api.us-east-1.amazonaws.com/test/externaljobs', job, {
      headers: new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbTp1cy1lYXN0LTFfR0ZhR3oyY2h1OmFmMWY0ZGU1LThkYzEtNDFiNy1hMGU2LTA1NGFiN2E3YTI2NiJ9.46410HtUYkF4AcnfQSXCIwxt6erST-KqfmoTouN1zSo'),
    })
    .subscribe(data => {
      console.log(data);
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
    /*something = true;
    if(something) {
      return;
    }*/

    var awsConfig = {
      region: 'us-east-1',
      IdentityPoolId: 'us-east-1:87b000cc-4720-41e6-a422-aa4d3a5ed544',
      UserPoolId: 'us-east-1_GFaGz2chu',
      ClientId: '2fciveui4031ctrcv2rc6flrej'
    }

    var authenticationData = {
        Username : 'pablo5',//pgotelli7
        Password : 'Pablo123',//Pgotelli7
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    var poolData = {
        UserPoolId : awsConfig.UserPoolId, // Your user pool id here
        ClientId : awsConfig.ClientId // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var userData = {
        Username : authenticationData.Username,
        Pool : userPool
    };

    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());

            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWS.config.region = awsConfig.region;

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId : awsConfig.IdentityPoolId, // your identity pool id here
                Logins : {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.us-east-1.amazonaws.com/us-east-1_GFaGz2chu' : result.getIdToken().getJwtToken()
                }
            });

            let params = {
                IdentityPoolId : awsConfig.IdentityPoolId,
                Logins : {
                    'cognito-idp.us-east-1.amazonaws.com/us-east-1_GFaGz2chu' : result.getIdToken().getJwtToken()
                }
            };
            let identity = new CognitoIdentity({
                region : awsConfig.region
            });

            let getIdPromise = new Promise((resolve, reject) => {
              identity.getId(params, function(err, data) {
                  if (err) {
                      console.log(err, err.stack); // an error occurred
                      reject(err);
                    }
                  else {
                      console.log("Ok getId");
                      console.log(data); // successful response
                      resolve(data);
                  }
              });
            });

            getIdPromise.then((resp: any) => {
              let params = {
                  IdentityId: resp.IdentityId,
                  Logins: {
                      'cognito-idp.us-east-1.amazonaws.com/us-east-1_GFaGz2chu': result.getIdToken().getJwtToken()
                  }
              };

              let getCredentialsPromise = new Promise((resolve, reject) => {
                identity.getCredentialsForIdentity(params, function (err, data) {
                    if (err) {
                        console.log(err, err.stack);
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
              });

              getCredentialsPromise.then((res: any) => {
                let clientParams = {
                    accessKey: res.Credentials.AccessKeyId,
                    secretKey: res.Credentials.SecretKey,
                    sessionToken: res.Credentials.SessionToken,
                    region: awsConfig.region
                };

                let apigClient = apigClientFactory.newClient(clientParams); //TODO: revisar como incluir esto
                let job = {
                   "projectId": "P-RDR178",
                   "externalId": "JOB10",
                   "customerName": "JOB10",
                   "status": "JOB_NEW",
                   "requestedDueDate":1509552000000,
                   "currentDueDate":1509552000000,
                   "actualDuration": 1800000,
                   "estimatedDuration": 1800000,
        //            "latitude": -34.9137939,
        //            "longitude": -57.9934855,
        //            "address": "Estadio Ciudad de La Plata",
        //            "city": "La Plata",
        //            "state": "Buenos Aires",
        //            "zipCode": "1900"
                    /*"assignee": {
                      "userName": "rmtest330",
                      "userId": "cognito-idp.us-east-1.amazonaws.com:us-east-1_GFaGz2chu:49b2b964-116e-4467-a65e-602541498f03"
                    },*/
                    "taskDefinitions" : ["P-RDR178_$_1557c708-d334-4972-b2d0-56e52ba8d39e"]
                }
                /*
                apigClient.externaljobsPost('', job, '').then((response) => {

                  console.log("se encontro la data buscada", response);

                }).catch(err => {

                    console.log('error', err);

                });*/

                let search = {
                  "jobId": "culo"
                }

                apigClient.taskGet(search, '', '').then((response) => {

                  console.log("se encontro la data buscada", response);

                }).catch(err => {

                    console.log('error', err);

                });
              });
            });

            //var s3 = new AWS.S3();
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();

        },

        onFailure: function(err) {
            alert(err);
        },

    });
  }

}
