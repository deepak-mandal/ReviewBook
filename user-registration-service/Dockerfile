FROM openjdk:11
ADD ./target/user-registration-service-0.0.1-SNAPSHOT.jar /usr/src/user-registration-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "user-registration-service-0.0.1-SNAPSHOT.jar"]
