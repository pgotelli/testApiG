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

//import * as apigClientFactory from "assets/apigwsdk/apigClient.js";

//declare var apigClientFactory : any;


@Component({
  selector: 'login',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("first console log", apigClientFactory);
    let something = apigClientFactory.newClient();
    var awsConfig = {
      region: ---,
      IdentityPoolId: ---,
      UserPoolId: ---,
      ClientId: ---
    }

    var authenticationData = {
        Username : 'pgotelli7',
        Password : 'Pgotelli7',
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
                apigClient.jobsListGet({userId : ''}).then((response) => {

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
