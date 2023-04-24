# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
The ticket breakdown was developed "ticketbreakdown" folder.

This project I used the following technologies and best practices:

- Node.js
- Typescript
- Express
- Jest
- PDFKit
- Supertest
- pdf-to-base64

* I built a REST API to generate a report in PDF. For this I think Typescript is the best choice because it is a typed language and it is easy to read and understand the code.
* I used Express to create the API. 
* I used Jest and supertest to test the application. 
* I used PDFKit to generate the PDF.
* I pdf-to-base64 to convert the PDF to base64, because any tools always return string base64 respect contract interface.

* I used concepts of SOLID and Clean Code and Clean Architecture.
* I created a controller to receive the request and call the service to generate the report. 
* I created folders to separate the responsibilities of the application DDD concepts.

* I used Clean Architecture for separate business rules for external frameworks and libraries. 
* I prefer develop using interfaces to allow the application to be extended without modifying the existing code

* I used the repository pattern to separate the data access from the business rules. The repository is in memory for this challenge.
* I used single responsibility principle to separate the business rules into small functions.
* I used open/closed principle to allow the application to be extended without modifying the existing code.
* I used the Liskov substitution principle to allow the application to be extended without modifying the existing code.
* I used the interface segregation principle to separate the business rules from the external frameworks and libraries.
* I used the dependency inversion principle to separate the business rules from the external frameworks and libraries.

This API have 3 routes:

    POST '/shift' - create a shift
    POST '/shift/generatePDF' - generate a report in PDF
    GET '/shift/:facilityId' - get all shifts by facility id

I could create more responsibilities to the application, like:

 - middleware to validate the request
 - error handler
 - external database
 - exceptions

But I think this is enough to show my skills.

Run project

- Install Node.js (we use ^16, the latest LTS)
- Run npm i in this repo to install dependencies
- Run npm run test to run the automated tests
- Run npm run dev to launch server.ts - PORT: 3000