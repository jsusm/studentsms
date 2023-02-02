import express from 'express'
import request from 'supertest';
import { controlerLoader } from '../../lib/controller/controllerLoader';
import { KlassController } from "../klass.controller";
import { KlassMockRepository, klassMockData } from "../mock.repository";
import { requestErrorHandler, requestZodErrorHander } from '../../errors'
import supertest from 'supertest';

let app: express.Application

function setUpController() {
  app = express()
  app.use(express.json())
  app.use('/', controlerLoader({ 'classes': new KlassController(new KlassMockRepository()) }))
  app.use(requestZodErrorHander)
  app.use(requestErrorHandler)
  return app
}
function jsonReq(t: supertest.Test) {
  return t
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

beforeEach(() => {
  app = setUpController()
})

describe('Klass controller', () => {
  describe('GET /classes', () => {
    it('Should return a list of klasses', async () => {
      const res = await request(app).get('/classes')
      expect(res.status).toBe(200)
      expect(res.body).toStrictEqual(klassMockData)
    })
  })
  describe('GET /classes/:id', () => {
    describe("Given an id", () => {
      it("Should return a klass", async () => {
        const res = await request(app).get('/classes/1').send()
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('klass')
      })
      it("Should return a klass' sessions", async () => {
        const res = await request(app).get('/classes/1').send()
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('sessions')
      })
    })
    describe("Given an non-existent id", () => {
      it("Should return a 404", async () => {
        const res = await request(app).get('/classes/1000').send()
        expect(res.status).toBe(404)
      })
    })
  })
  describe('POST /classes', () => {
    describe("Given a valid payload", () => {
      it("Should return a 200", async () => {
        const payload = {
          title: 'Test class',
          pph: 2,
        }
        const res = await jsonReq(request(app).post('/classes'))
          .send(payload)
        expect(res.status).toBe(201)
      })
    })
    describe("Given an invalid payload", () => {
      it("Should return a 400", async () => {
        const payload = {
        }
        const res = await jsonReq(request(app).post('/classes'))
          .send(payload)
        expect(res.status).toBe(400)
        expect(res.body).toMatch(/pph/)
        expect(res.body).toMatch(/title/)
      })
    })
  })
  describe('PATCH /classes/:id', () => {
    describe("Given a valid payload and a existent id", () => {
      it("Should return a 200", async () => {
        const payload = {
          title: 'Test class',
          pph: 2,
        }
        const res = await jsonReq(request(app).patch('/classes/1')).send(payload)
        expect(res.status).toBe(200)
        expect(res.body).toMatchObject(payload)
      })
    })
  })
  describe('DELETE /classes/:id', () => {
    describe("Given a valid payload and a existent id", () => {
      it("Should return a 200", async () => {
        const res = await jsonReq(request(app).delete('/classes/1'))
        expect(res.status).toBe(200)
      })
    })
  })
})
