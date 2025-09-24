FROM golang:tip-trixie AS builder

WORKDIR /app

COPY ./hello.go .

RUN go mod init example/hello
RUN go build -ldflags="-s -w" -o hello


FROM scratch

WORKDIR /app

COPY --from=builder /app/hello . 

ENTRYPOINT [ "./hello" ]