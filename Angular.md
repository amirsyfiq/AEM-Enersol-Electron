[![AEM Enersol](http://i0.wp.com/aemenersol.com/wp-content/uploads/2015/12/Logo-AEM-for-MegaProject-Final.png?fit=290%2C129)](http://aemenersol.com)

AEM Enersol is an independent integrated consultancy services, from upstream to downstream. Our impartiality allows us to provide a high quality advise to optimize clients' portfolio in a business. Our principle is grounded in an ultimate priority - achieving clients' needs at beyond the best limit.

# Angular Interview Test

Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop.

## Guideline

You will be given **3 Day** to complete the test. You may use whatever resources you like as long as you are following the below **Tech stack**.

## Tech stack
   - [Angular 14](https://angular.io/) & [Angular CLI](https://cli.angular.io/)
   - Any CSS framework([Foundation](http://foundation.zurb.com/), [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/), [Semantic-UI](http://semantic-ui.com/))
   - Any charting library([D3](https://d3js.org/), [Plot.ly](https://plot.ly/), [AmCharts](https://www.amcharts.com/)) to visualize some data
   - [NPM](https://www.npmjs.com/) for package management
   - [Git](https://git-scm.com/) for source code version control

## Your task

By using the above tech stack, create a dashboard interface that consist of **two**(2) main module (Sign In and Dashboard). The module must consume the API listed in **API section** on each modules. The finished code need to be store/put in your [Github](http://github.com) repository and make it public. Then you will required to give the repository link at the end of this test.

Please note that when **Sign In** process is success, server will response a **Bearer Token**. The token need to be send on each API call. See this [link](https://stackoverflow.com/questions/52468071/how-to-send-jwt-token-as-authorization-header-in-angular-6?answertab=votes#tab-top) for more info.

## Requirement
   - Replicate the UI as per design (Layout and Color Scheme)
   - Validate the form (eg: Prevent user to submit if form not complete/error)
   - Validate the routing (eg : cannot by pass page without authenticated)


### Sign In

This module is for authenticate user before allowing them to access the **Dashboard** module. Code the **Sign In** module User Interface in Angular using HTML and Sass. Use the below credential to authenticate the user:
  - email: **user@aemenersol.com**
  - password: **Test@123**

#### User Interface

[![Sign Interface](src/assets/img/signin.png)]()

#### API

Endpoint
```
POST: http://test-demo.aemenersol.com/api/account/login
```
Model
```
{
  username: String,
  password: String
}
 ```
Response
```
Bearer Token
```

### Dashboard

This module is for displaying simple overview in form of chart and table/grid. Make sure that this module only accessible when user is authenticated. Any attempt to access this module without authentication should be redirect to **Sign In** module.

#### Interface

[![Sign Interface](src/assets/img/dashboard.png)]()

#### API

Endpoint
```
GET: http://test-demo.aemenersol.com/api/dashboard
```
Model
```
none
```
Response
```
{
  "chartDonut": Array,
  "chartbar": Array,
  "tableUsers": Array
}
 ```
