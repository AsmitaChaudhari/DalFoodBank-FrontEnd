

# Assignment 2 - DAL Food Bank

This Assignment task is to design Four web pages of project. Main purpose of assignment is to learn and understand usability and design principles of  front end design. This assignment dose not require any back-end work. 

- [Source Code - GitHub](https://github.com/AsmitaChaudhari/dsu-food-bank)
- [App Link](http://dsu-food-bank.herokuapp.com/home)

* *Date Created*: 02 june 2020
* *Last Modification Date*: 14 june 2020

## Author

* [Asmita Chaudhari - B00835062](as320435@dal.ca)

## Project Overview
The purpose of this project is to provide web-platform for dalhousie food bank. Current system of Food bank is paper-based, which makes it hard for students and management to connect with each other during this COVID-19 time. This application will provide online platform where students can see the products and services provided by the Dal food bank.This website will be refereed as "Dal Food Bank".

### Web Pages

I have designed Four pages for this assignment. Links for main four pages is provided below. 

- [Home Page](http://dsu-food-bank.herokuapp.com/home)
- [Login Page](https://dsu-food-bank.herokuapp.com/login)
- [Donate Page](https://dsu-food-bank.herokuapp.com/donate)
- [Employee Management page](https://dsu-food-bank.herokuapp.com/admin/workers)

 1. [Home Page](http://dsu-food-bank.herokuapp.com/home) :
Home page is the landing page of website. It contains main three section about products, donate and volunteer. User can navigate through website using navbar.
 2. [Login Page](https://dsu-food-bank.herokuapp.com/login) :
Login page have simple form with email and password. Form validation form email and password is done in login form.
3. [Donate Page](https://dsu-food-bank.herokuapp.com/donate):
This page is designed to take donation. It contains one form and image. Design for page is simple and minimalist. Form input validation is also done for donation page.
4. [Employee Management page](https://dsu-food-bank.herokuapp.com/admin/workers) : 
This page is mainly for admin use. For this assignment i have skipped the admin login part and give direct access to employee management page. This page shows the list of employees and volunteer of dal food bank.
5. [Error page](https://dsu-food-bank.herokuapp.com/pagenotfound) :
If user enter any invalid path or path which is not defined in code then user will be redirect to error page.

## Technologies

- **Angular** : I have used [Angular](https://angular.io) for front end development. Angular is a full-fledged framework for development, which does not require additional libraries. Angular supports data maintenance using services, lazy loading. Angular framework is based on MVC architecture.The component based structure of Angular makes the components highly reusable across the platform Considering all the points i have decided to use Angular.

- **Bootstrap** : For the page design i have used the bootstrap. Bootstrap provides direct classes which can be used in HTML tags to make website design responsive.Moreover, bootstrap is compatible with almost all platform so it is is to use.


## Justification For Design

- Front End validation : For form validation i have used [Angular](https://angular.io/api/forms/Validators) built-in validators. For login page, i have used the email and password patterns to validate the user input.

- Typography : I have used css built-in fonts for the project.

- Color Schema : I have used two basic colors for my webpages to make it look simple and aesthetic. Primary color is shed of blue (#22223b) and secondary color is white.

- Heder And Footer - I have used the dark UI for header and Footer with light font color. All webpages have the light background so in contrast i have used  dark header and Footer to make it more aesthetic.
 - Light Background - Light UI improves the readability. It improves the clarity so i have decided to use the light background for web pages.


# Getting Started

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this assignment up and running on your local machine, you will first need to install the following software / libraries / plug-ins

1.  Editor (Preferred  - [Visual Studio Code](https://code.visualstudio.com/download))
2. [Node JS](https://nodejs.org/en/download/)
3. [npm](https://www.npmjs.com/get-npm)
4. [Angular CLI](https://cli.angular.io/)


See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running

1. Go to project folder and install dependencies:
 ```sh
 npm install
 ```

2. Launch development server, and open `localhost:4200` in your browser:
 ```sh
 npm run dev
 ```

3. Build the application for production:
 ```sh
 npm run build
 ```

After successful installation of required software / libraries / plug-ins, marker can see the Home page of application as shown in below attachment.

-  Home Page
<a href="https://ibb.co/M1tbNB7"><img src="https://i.ibb.co/Yd16j0h/Screenshot-41.png" alt="Screenshot-41" border="0" /></a>


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and
[NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

- Automatic code formatting with [Prettier](https://prettier.io)
- Responsive website with [Bootstrap](https://getbootstrap.com/) and [Angular Flex Layout](https://github.com/angular/flex-layout) 

#### Libraries

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex Layout](https://github.com/angular/flex-layout)
- [Material Icons](https://material.io/icons/)
- [Bootstrap](https://getbootstrap.com/)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)



## Sources Used

### app.component.html

**Lines 03 - 18**

```
<nav class="navbar navbar-expand-sm fixed-top">
  <a class="navbar-brand">DAL Food Bank</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarCollapse"
    aria-controls="navbarCollapse"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >Menu
    <span class="navbar-toggler-icon my-toggler"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button> 
```

The code above was created by adapting the code in [Bootstrap navbar](https://getbootstrap.com/docs/4.5/components/navbar/) as shown below: 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
```

- The code in [Bootstrap navbar](https://getbootstrap.com/docs/4.5/components/navbar/) is an example code for Basic Navbar.
- [Bootstrap navbar](https://getbootstrap.com/docs/4.5/components/navbar/)'s Code was used to create navbar with toggler button.
- I have changed [Bootstrap navbar](https://getbootstrap.com/docs/4.5/components/navbar/)'s Code by changing default classes and customized it according my website theme to make it responsive for different screen sizes.


### app.component.scss

**Lines 01** 

```
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

```

The code above was created by adapting the code in [W3School](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp) as shown below: 

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

```

- The code in [W3School](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp) was implemented by W3School to show use of social media Buttons with different styles.
- The library in [W3School](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp)'s code was used to add social media symbols in application footer.
- I have imported [W3School](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp)'s library in app.component.scss file to access social media icons in footer. 

### donate.component.html

**Lines 04**
```
 <div class="overlay d-none d-md-block">

```
The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/14207109/hiding-elements-in-responsive-layout) as shown below: 

```
 d-block d-md-none to hide on medium, large and extra large devices.

d-none d-md-block to hide on small and extra-small devices.

```

- The code in [StackOverflow](https://stackoverflow.com/questions/14207109/hiding-elements-in-responsive-layout) is developed by [Julien](https://stackoverflow.com/users/850438/julien) and is used to resolve problem of hiding elements in responsive layout. 

- I have used classes from  [Julien](https://stackoverflow.com/users/850438/julien)'s answer to hide Donation image in small screens.

### donation.component.ts

**Lines 11 - 16**

```
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(dialogbox);
  }

```
The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/dialog/examples) as shown below: 

```
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

```
- The code in [Angular Material](https://material.angular.io/components/dialog/examples) is used in the example of basic Dialog component.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s code was used to create dialog box for conformation message.
- I have refered  [Angular Material](https://material.angular.io/components/dialog/examples)'s Dialog box code and create a component for application.

### workers.component.html

**Lines 18**

```
<mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>

```
The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/paginator/overview) as shown below: 

```
<mat-paginator [length]="100"
              [pageSize]="10"
              [pageSizeOptions]="[5, 10, 25, 100]">
</mat-paginator>

```
- The code in [Angular Material](https://material.angular.io/components/paginator/overview) is used to show example of basic paginator component.
- I have used paginator component from  [Angular Material](https://material.angular.io/components/paginator/overview) and used it in employee details table.

### workers.component.ts

**Lines 37 - 40**

```
 <ng-container matColumnDef="firstname">
            <th mat-header-cell *matHeaderCellDef>First Name</th>
            <td mat-cell *matCellDef="let element">{{ element.firstname }}</td>
          </ng-container>

```
The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/table/overview) as shown below: 

```
<ng-container matColumnDef="score">
  <th mat-header-cell *matHeaderCellDef> Score </th>
  <td mat-cell *matCellDef="let user"> {{user.score}} </td>
</ng-container>

```
- The code in [Angular Material](https://material.angular.io/components/table/overview) is used to show Table column template
- I have used column template code from  [Angular Material](https://material.angular.io/components/table/overview) and modified it according to employee details data and then reuse it for creating different column in table.




## References:
- [Card | Angular Material](https://material.angular.io/components/card/overview)
- [flex - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [Forms | Bootstrap](https://getbootstrap.com/docs/4.5/components/forms/)
- [Grid Layout | Bootstrap](https://getbootstrap.com/docs/4.5/layout/grid/)
- [Navbar | Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/)
- [Form Validators | Angular Material](https://angular.io/api/forms/Validators)

## Image References

- [Donation Page Image](https://www.wix.com/logo/maker/esh/zoe-editor?logoId=1fb6c69c-c1c8-43cf-99fd-de7e5b538cbf&referralAdditionalInfo=mylogos) 
- [Error Page Image](https://www.freepik.com/free-photos-vectors/technology)
- [Home Page Image](https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?cs=srgb&dl=board-bread-breakfast-bunch-349610.jpg&fm=jpg)


