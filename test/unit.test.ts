import { expect, test, describe, beforeAll, afterAll, it } from "bun:test";
import { app } from "../src/server"
import { Server } from "http";
import request from "supertest"

describe("server test", () => {
    let server: Server;
    beforeAll(() => {
        server = app.listen(4001)
    })

    afterAll(done => {
        server.close(done);
    })

    it('should return "Hello World!"', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Hello World" });
    });
})