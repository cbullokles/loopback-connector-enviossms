# loopback-connector-enviossms
EnvioSMS connector for the LoopBack framework.

I needed an easy way to send SMS using EnvioSMS so I decided to build this connector.

### Installation
If you want to know how to get started with Loopback [check this][5].

To add a new data source, use the data source generator:
```sh
lb datasource
```
Then the data source generator will prompt some questions like

 - Enter the data-source name: **Firestore** *(Choose your prefered name)*
 - Select the connector for Firestore: **other**
 - Enter the connector's module name **loopback-connector-enviossms**
 - Install loopback-connector-enviossms (Y/n) **y**

You should fill the application's datasource file which is located in `/server/datasources.json`  with those details, You can find details in : 

```json
"enviossms": {
  "name": "enviosms",
  "username": "",
  "password":  "",
  "baseURL": ""
}
```

#### Connection properties

| Property | Type&nbsp;&nbsp; | Description | --- |
| --- | --- | --- | --- |
| projectId | String | project_id in the JSON file | --- |
| clientEmail | String | client_email in the JSON file | --- |
| privateKey | String | private_key in the JSON file | --- |
| databaseName | String | Firebase's project id | Optional, Default: projectId | --- |

And you can actually store those private details as an Environment variables, Check [source-configuration][8]

### Inspiration
I've got inspired by the Official [MongoDB connector][3] by Loopback

### License

Copylefted (c) 2017 [Cristian Bullokles][1] Licensed under the [MIT license][2].

