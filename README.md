<h1>ReviewBook Platform – <b><i>Java, Spring Boot, MySQL, Angular</i></b></h1> 
<li>Designed a single page application backed by microservices architecture where user can provide reviews and ratings on products.</li>
<li>Built Restful APIs that involves CRUD operations, JWT authentication, microservices communication using RabbitMQ; Docker.</li>


<hr/>
ReviewBook - Product Overview

Content: Architecture Diagram, Technical overview, High-level Features
<br/>
Domain: eCommerce => Reviews and ratings

![user_view](/img/arch.png)
![user_view](/img/rb.png)

<h1>High-level Features</h1>
<li>As a guest-user, I must be able see the landing page which displays basic information about the platform; and able to See all the Available Products on the platform</li>
<li>As a guest user, I must be able to register myself on the platform as a regular user or as a product owner</li>
<li>As a registered user, I must be able to login using correct credentials.</li>
<li>As a logged-in user, I must be able to view and edit my profile.</li>
<li>As a Product Owner, I must be able to Add new Product details, Update my added products, Delete my existing Product & see my added product on the platform.</li>
<li>As a logged-in user, I must be able to see (others) review, give own review and rating & like other's review comments on the products</li>

<h1>Architecture Diagram</h1>
![Arch-rb](https://user-images.githubusercontent.com/55249860/219939915-c8d2d60a-54f1-46f6-a8f7-dafd446bdb4f.png)

<h1>Architecture of ReviewBook</h1>
![rb-rep](https://user-images.githubusercontent.com/55249860/219939921-3a606607-699b-447e-bf66-bc3a00e76483.png)

<h1>_**Product's Documentation:**_ https://github.com/deepak-mandal/ReviewBook-Documentation</h1>


Software Requirement:-
- JDK v11 (run .msi file) - https://www.oracle.com/in/java/technologies/downloads/
- Eclipse IDE - https://eclipseide.org/
- MySQL, PATH setup - https://dev.mysql.com/downloads/installer/
- MongoDB, PATH setup - https://www.mongodb.com/try/download/community

- Node (run .msi file) - https://nodejs.org/en/download
- TypeScript v4.5 (npm install -g typescript) - https://www.typescriptlang.org/download/
- Angular v13 (npm install -g @angular/cli) - https://angular.dev/installation
- Visual Studio Code IDE - https://code.visualstudio.com/

- MySQL Script

- MongoDB Script

Ports
- Eureka Server: 8076
- Config Server: 8888
- API Gateway: 8086
- Login Service: 8080
- Product Management: 8081
- User Registration Service: 8082
- Product Recommendation: 8083
- Review Management: 8084
