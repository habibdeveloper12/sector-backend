import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { sectorService } from './sector.service';

const createSector: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await sectorService.createSector(req.body);
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sectors!',
      data: result,
    });
  }
);
const getSector: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await sectorService.getSector();
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sector!',
      data: result,
    });
  }
);
const getASector: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await sectorService.getASector(id);
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sector!',
      data: result,
    });
  }
);
const deleteSector: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await sectorService.deleteSector(id);
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sector!',
      data: result,
    });
  }
);
const updateSector: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const result = await sectorService.updateSector({ id, body });
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sector!',
      data: result,
    });
  }
);

export const sectorController = {
  createSector,
  getSector,
  getASector,
  deleteSector,
  updateSector,
};
