import express from "express";
import request from "supertest";
import { setUpApp } from "../../app";
import { UpdateSessionData } from "../../sessions/session.repository";
import { studentMockData, StudentMockRepository } from "../mock.repository";
import { StudentController } from "../student.controller";
import { Student } from "../student.model";
import { CreateStudentData, UpdateStudentData } from "../student.repository";

let app: express.Application

beforeEach(() => {
  app = setUpApp({'students': new StudentController(new StudentMockRepository)})
})

describe('Student controller', () => {
  describe('Get /api/v2/students', () => {
    it("Should return an array of Students", async () => {
      const res = await request(app).get('/api/v2/students')
      expect(res.status).toBe(200)
      expect(res.body).toBeDefined()
    })
  })
  describe('Get /api/v2/students/:id', () => {
    describe("Given a existent id", () => {
      it('Should return a 200', async () => {
        const res = await request(app).get('/api/v2/students/1')
        expect(res.status).toBe(200)
      })
      it('Should return a student', async () => {
        const res = await request(app).get('/api/v2/students/1')
        expect(res.body).toHaveProperty("student")
      })
      it('Should return student\'s sessions', async () => {
        const res = await request(app).get('/api/v2/students/1')
        expect(res.body).toHaveProperty("sessions")
      })
    })
    describe("Given a non-existent id", () => {
      it('Should return 404 not found', async () => {
        const res = await request(app).get('/api/v2/students/1000')
        expect(res.status).toBe(404)
      })
    })
  })
  describe('POST /api/v2/students/:id', () => {
    describe('Given a valid payload', () => {
      it("Should return a student", async () => {
        const payload: CreateStudentData = {
          contactNumber: '+54 412-563-2095',
          description: 'Test student',
          name: 'Test student',
          lastName: 'Test student',
          bornDate: new Date(2005, 2, 23)
        }
        const res = await request(app)
          .post('/api/v2/students')
          .set('Content-Type', 'application/json')
          .send(payload)
        expect(res.status).toBe(201)
        expect(res.body).toBeDefined()
      })
    })
    describe('Given an invalid contactNumber', () => {
      it("Should return a 400 bad request", async () => {
        const payload: CreateStudentData = {
          contactNumber: '+54 3-2095',
          description: 'Test student',
          name: 'Test student',
          lastName: 'Test student',
          bornDate: new Date(2005, 2, 23)
        }
        const res = await request(app)
          .post('/api/v2/students')
          .set('Content-Type', 'application/json')
          .send(payload)
        expect(res.status).toBe(400)
        expect(res.body).toMatch(/contactNumber/)
      })
    })
  })
  describe('PUT /api/v2/students/:id', () => {
    describe('Given a valid payload', () => {
      it("Should return a student", async () => {
        const payload: UpdateStudentData = {
          contactNumber: '+54 412-563-2095',
          name: 'Test student Updated',
          lastName: 'Test student Updated',
        }
        const res = await request(app)
          .patch('/api/v2/students/1')
          .set('Content-Type', 'application/json')
          .send(payload)
        expect(res.status).toBe(200)
        expect(res.body).toMatchObject(payload)
      })
    })
    describe('Given an invalid contactNumber', () => {
      it("Should return a 400 bad request", async () => {
        const payload: UpdateStudentData = {
          contactNumber: '+54 3-2095',
        }
        const res = await request(app)
          .patch('/api/v2/students/1')
          .set('Content-Type', 'application/json')
          .send(payload)
        expect(res.status).toBe(400)
        expect(res.body).toMatch(/contactNumber/)
      })
    })
  })
  describe('DELETE /api/v2/students/:id', () => {
    describe('Given a existent id', () => {
      it("Should return 200", async () => {
        const res = await request(app).delete('/api/v2/students/1')
        expect(res.status).toBe(200)
      })
    })
    describe('Given an non-existent id', () => {
      it("Should return a 404 not found", async () => {
        const res = await request(app).delete('/api/v2/students/1000')
        expect(res.status).toBe(404)
      })
    })
  })
})
