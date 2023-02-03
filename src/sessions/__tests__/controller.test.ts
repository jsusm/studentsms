import express from 'express'
import { setUpApp } from '../../app'
import { SessionMockRepository } from '../mock.repository'
import { SessionController } from '../session.controller'
import request from 'supertest'
import { CreateSessionData, UpdateSessionData } from '../session.repository'

let app: express.Application

beforeEach(() => {
  app = setUpApp({ 'sessions': new SessionController(new SessionMockRepository()) })
})

describe('Session controller', () => {
  describe('GET /api/v2/sessions', () => {
    it("Should return a session list", async () => {
      const res = await request(app).get('/api/v2/sessions')
      expect(res.status).toBe(200)
      expect(res.body).toBeDefined()
    })
  })
  describe('GET /api/v2/sessions/:id', () => {
    describe("Given a existent id", () => {
      it("Should return a session", async () => {
        const res = await request(app).get('/api/v2/sessions/1').send()
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('session')
      })
      it("Should return a session's class and student", async () => {
        const res = await request(app).get('/api/v2/sessions/1').send()
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('session')
        expect(res.body).toHaveProperty('klass')
        expect(res.body).toHaveProperty('student')
      })
    })
    describe("Given a non-existent id", () => {
      it("Should return a 404 not found", async () => {
        const res = await request(app).get('/api/v2/sessions/1000')
        expect(res.status).toBe(404)
      })
    })
  })
  describe('POST /api/v2/sessions', () => {
    describe("Given a valid payload", () => {
      it("Should return a session", async () => {
        const payload: CreateSessionData = {
          studentId: 1,
          duration: 1,
          klassId: 1,
          date: new Date(2024, 3, 21)
        }
        const res = await request(app)
          .post('/api/v2/sessions')
          .set("Content-Type", "application/json")
          .send(payload)
        expect(res.status).toBe(201)
      })
    })
    describe("Given an invalid payload", () => {
      it("Should return a 400 bad request", async () => {
        const res = await request(app)
          .post('/api/v2/sessions')
          .set("Content-Type", "application/json")
          .send({})
        expect(res.status).toBe(400)
        expect(res.body).toMatch(/Validation error/)
      })
    })
  })
  describe('PATCH /api/v2/sessions/:id', () => {
    describe("Given a existent id and a valid payload", () => {
      it("Should return a updated session", async () => {
        const payload: UpdateSessionData = {
          duration: 2,
          attended: true,
        }
        const res = await request(app)
          .patch('/api/v2/sessions/1')
          .set("Content-Type", "application/json")
          .send(payload)
        expect(res.status).toBe(200)
        expect(res.body).toMatchObject(payload)
      })
      it("Should return 409 Conflict if session attended was attended", async () => {
        const payload: UpdateSessionData = {
          duration: 3,
        }
        const res = await request(app)
          .patch('/api/v2/sessions/2')
          .set("Content-Type", "application/json")
          .send(payload)
        expect(res.status).toBe(409)
        expect(res.body).toMatch(/attended/)
      })
    })
    describe("Given an invalid payload", () => {
      it("Should return a 400 bad request", async () => {
        const res = await request(app)
          .patch('/api/v2/sessions/100')
          .set("Content-Type", "application/json")
          .send({})
        expect(res.status).toBe(404)
      })
    })
  })
  describe('DELETE /api/v2/sessions/:id', () => {
    describe("Given a existent id", () => {
      it("Should return 200", async () => {
        const res = await request(app).delete('/api/v2/sessions/1').send()
        expect(res.status).toBe(200)
      })
    })
    describe("Given a non-existent id", () => {
      it("Should return a 404 not found", async () => {
        const res = await request(app).delete('/api/v2/sessions/1000')
        expect(res.status).toBe(404)
      })
    })
  })
})
