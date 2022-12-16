echo off
docker build -f ./Dockerfile -t oss-tools:1.0.0 .
docker images
pause