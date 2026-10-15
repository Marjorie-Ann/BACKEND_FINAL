import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async () => {
  const students = await studentModel.fetchAllStudents();
  return students;
}

export const createStudent = async (student) => {
  const studentId = await studentModel.insert(student);
  return studentId;
}

export const updateStudent = async (student) => {
  const updatedStudent = await studentModel.update(student);
  return updatedStudent;
}