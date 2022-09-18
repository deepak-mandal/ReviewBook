FROM openjdk:11
ADD ./target/product-management-0.0.1-SNAPSHOT.jar /usr/src/product-management-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "product-management-0.0.1-SNAPSHOT.jar"]
