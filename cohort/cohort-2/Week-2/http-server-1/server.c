#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

int main() {

    // 1️⃣ Create socket
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);

    // 2️⃣ Bind socket to port
    struct sockaddr_in address;
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(8080);

    bind(server_fd, (struct sockaddr*)&address, sizeof(address));

    // 3️⃣ Listen
    listen(server_fd, 1);

    // 4️⃣ Accept connection
    int client_fd = accept(server_fd, NULL, NULL);

    // 5️⃣ Read request
    char buffer[4096];
    int bytes_read = read(client_fd, buffer, sizeof(buffer) - 1);

    buffer[bytes_read] = '\0';  // end string safely

    printf("----- RAW REQUEST -----\n%s\n", buffer);

    // 6️⃣ Send response
    const char *response =
        "HTTP/1.1 200 OK\r\n"
        "Content-Type: text/plain\r\n"
        "Content-Length: 11\r\n"
        "\r\n"
        "Hello World";

    write(client_fd, response, strlen(response));

    // 7️⃣ Close
    close(client_fd);
    close(server_fd);

    return 0;
}
