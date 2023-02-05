import express from 'express'
import request from 'supertest'
import { setUpApp } from '../../app'
import { PaymentMockRepository } from '../mock.repository'
import { PaymentController } from '../payment.controller'
import { CreatePaymentData } from '../payment.repository'

let app: express.Application

beforeEach(() => {
  app = setUpApp({'payments': new PaymentController(new PaymentMockRepository())})
})

describe('PaymentController', () => {
  describe("GET /api/v2/payments", () => {
    it("Should return a 200",async () => {
      const res = await request(app)
        .get("/api/v2/payments")
      expect(res.status).toBe(200)
      expect(res.body).toBeDefined()
    })
  })
  describe("GET /api/v2/payments/:id", () => {
    describe("Given a existent id", () => {
      it("Should return a payment", async () => {
        const res = await request(app)
          .get("/api/v2/payments/1")
        expect(res.status).toBe(200)
        expect(res.body).toBeDefined()
      })
    })
    describe("Given a non-existent id", () => {
      it("Should return a 404 not found", async () => {
        const res = await request(app)
          .get("/api/v2/payments/1000")
        expect(res.status).toBe(404)
      })
    })
  })
  describe("POST /api/v2/payments", () => {
    describe("Given a valid payload", () => {
      it("Should return a payload", async () => {
        const payload: CreatePaymentData  = {
          sessionId: 1,
          at: new Date(),
        }
        const res = await request(app)
          .post("/api/v2/payments")
          .set("Content-Type", "application/json")
          .send(payload)
        console.log(res.body)
        expect(res.status).toBe(201)
        expect(res.body).toBeDefined()
      })
    })
    describe("Given an invalid payload", () => {
      it("Should return 400 bad request", async () => {
        const payload = { }
        const res = await request(app)
          .post("/api/v2/payments")
          .set("Content-Type", "application/json")
          .send(payload)
        expect(res.status).toBe(400)
        expect(res.body).toMatch(/error/)
      })
    })
  })
  describe("DELETE /api/v2/payments/:id", () => {
    describe("Given a existent id", () => {
      it("Should return a payment", async () => {
        const res = await request(app)
          .delete("/api/v2/payments/1")
        expect(res.status).toBe(200)
      })
    })
    describe("Given a non-existent id", () => {
      it("Should return a 404 not found", async () => {
        const res = await request(app)
          .delete("/api/v2/payments/1000")
        expect(res.status).toBe(404)
      })
    })
  })
})
