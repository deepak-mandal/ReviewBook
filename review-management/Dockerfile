FROM openjdk:11
ADD ./target/review-management-0.0.1-SNAPSHOT.jar /usr/src/review-management-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "review-management-0.0.1-SNAPSHOT.jar"]
