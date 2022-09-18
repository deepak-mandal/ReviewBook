#FROM openjdk:11
#ENV JAR_FILE=product-recommendation-0.0.1-SNAPSHOT.jar
#COPY target/${JAR_FILE} ${JAR_FILE}
#EXPOSE 8085
#ENTRYPOINT java -jar "${JAR_FILE}"

FROM openjdk:11
ADD ./target/product-recommendation-0.0.1-SNAPSHOT.jar /usr/src/product-recommendation-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "product-recommendation-0.0.1-SNAPSHOT.jar"]
