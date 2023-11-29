import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicSemesterServices } from './academic.Sem.Service';

// create student
const createAcademicSemester = catchAsync(async (req, res) => {
  const data = req.body;

  const result =
    await academicSemesterServices.createAcademicSemesterIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester  created successfully',
    data: result,
  });
});

export const academicSemesterControllers = {
  createAcademicSemester,
};