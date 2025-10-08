FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -q -DskipTests dependency:go-offline
COPY src ./src
RUN mvn -q -DskipTests package

FROM eclipse-temurin:17-jre
WORKDIR /app
RUN apt-get update \
 && apt-get install -y --no-install-recommends curl \
 && rm -rf /var/lib/apt/lists/*
# đổi pattern nếu jar không phải SNAPSHOT
COPY --from=build /app/target/*-SNAPSHOT.jar /app/app.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","/app/app.jar","--spring.profiles.active=docker"]
