# --- Build stage ---
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -q -DskipTests dependency:go-offline
COPY src ./src
RUN mvn -q -DskipTests package

# --- Runtime stage ---
FROM eclipse-temurin:17-jre
WORKDIR /app

# Cần curl nếu bạn dùng healthcheck kiểu curl trong tương lai
RUN apt-get update \
 && apt-get install -y --no-install-recommends curl \
 && rm -rf /var/lib/apt/lists/*

# Copy JAR (dùng pattern *.jar an toàn hơn *-SNAPSHOT.jar)
COPY --from=build /app/target/*.jar /app/app.jar

# user-service chạy cổng 8081 (không phải 8761)
EXPOSE 8081

ENTRYPOINT ["java","-jar","/app/app.jar","--spring.profiles.active=docker"]
