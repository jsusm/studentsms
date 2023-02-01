import express from 'express'
import request from 'supertest';
import { controlerLoader } from '../../lib/controller/controllerLoader';
import { KlassController } from "../klass.controller";
import { KlassMockRepository, test_klasses } from "../mock.repository";

function setUpController(repo: KlassMockRepository) {
  const app = express()
  app.use('/', controlerLoader({ 'classes': new KlassController(repo) }))
  return app
}

describe('Klass controller', () => {
  describe('GET /classes', () => {
    it('Should return a list of klasses', async () => {
      const repo = new KlassMockRepository
      repo.mockedKlasses = test_klasses
      const app = setUpController(repo)
      const res = await request(app).get('/classes')
      expect(res.status).toBe(200)
      expect(res.body).toStrictEqual(test_klasses)
    })
  })
})
