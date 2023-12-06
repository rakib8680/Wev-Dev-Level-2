import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FacultyServices } from "./faculty.service";








// get single faculty 
const getSingleFaculty = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await FacultyServices.getSingleFacultyFromDB( id );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculty is retrieved successfully',
      data: result,
    });
  });



//   get all faculties
const getAllFaculties = catchAsync(async (req, res) => {
    const result = await FacultyServices.getAllFacultiesFromDB(req.query);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculties are retrieved successfully',
      data: result,
    });
  });



  const updateFaculty = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { faculty } = req.body;
    const result = await FacultyServices.updateFacultyIntoDB( id , faculty);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculty is updated successfully',
      data: result,
    });
  });
  

//   delete faculty 
const deleteFaculty = catchAsync(async (req, res) => {
    const {  id } = req.params;
    const result = await FacultyServices.deleteStudentFromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculty is deleted successfully',
      data: result,
    });
  });




  export const FacultyControllers = {
    getAllFaculties,
    getSingleFaculty,
    deleteFaculty,
    updateFaculty,
  };