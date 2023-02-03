import express from 'express'
import request from 'supertest';
import { KlassController } from "../klass.controller";
import { KlassMockRepository, klassMockData } from "../mock.repository";
import supertest from 'supertest';
import { setUpApp } from '../../app';

let app: express.Application

function jsonReq(t: supertest.Test) {
  return t
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

beforeEach(() => {
  app = setUpApp({'classes': new KlassController(new KlassMockRepository)})
})

describe('Klass controller', () => {
  describe('GET /api/v2/classes', () => {
    it('Should return a list of klasses', async () => {
      const res = await request(app).get('/api/v2/classes')
      expect(res.status).toBe(200)
      expect(res.body).toStrictEqual(klassMockData)
    })
  })
  describe('GET /api/v2/classes/:id', () => {
    describe("Given an id", () => {
      it("Should return a klass", async () => {
        const res = await request(app).get('/api/v2/classes/1').send()
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('klass')
      })
      it("Should return a klass' sessions", async () => {
        const res = await request(app).get('/api/v2/classes/1').send()
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('sessions')
      })
    })
    describe("Given an non-existent id", () => {
      it("Should return a 404", async () => {
        const res = await request(app).get('/api/v2/classes/1000').send()
        expect(res.status).toBe(404)
      })
    })
  })
  describe('POST /api/v2/classes', () => {
    describe("Given a valid payload", () => {
      it("Should return a 200", async () => {
        const payload = {
          title: 'Test class',
          pph: 2,
        }
        const res = await jsonReq(request(app).post('/api/v2/classes'))
          .send(payload)
        expect(res.status).toBe(201)
      })
    })
    describe("Given an invalid payload", () => {
      it("Should return a 400", async () => {
        const payload = {
        }
        const res = await jsonReq(request(app).post('/api/v2/classes'))
          .send(payload)
        expect(res.status).toBe(400)
        expect(res.body).toMatch(/pph/)
        expect(res.body).toMatch(/title/)
      })
    })
  })
  describe('PATCH /api/v2/classes/:id', () => {
    describe("Given a valid payload and a existent id", () => {
      it("Should return a 200", async () => {
        const payload = {
          title: 'Test class',
          pph: 2,
        }
        const res = await jsonReq(request(app).patch('/api/v2/classes/1')).send(payload)
        expect(res.status).toBe(200)
        expect(res.body).toMatchObject(payload)
      })
    })
  })
  describe('DELETE /api/v2/classes/:id', () => {
    describe("Given a valid payload and a existent id", () => {
      it("Should return a 200", async () => {
        const res = await jsonReq(request(app).delete('/api/v2/classes/1'))
        expect(res.status).toBe(200)
      })
    })
  })
})
