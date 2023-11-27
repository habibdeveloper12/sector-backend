import { Sector } from './sector.model';

const createSector = async ({
  name,
  agreeToTerms,
  sectors,
}: any): Promise<any | null> => {
  const doneSave = {
    name,
    agreeToTerms,
    sectors,
  };

  new Sector({
    name,
    agreeToTerms,
    sectors,
  }).save();
  return doneSave;
};
const getSector = async (): Promise<any | null> => {
  const sector = Sector.find({});
  console.log(sector);
  return sector;
};
const getASector = async (id: string): Promise<any | null> => {
  const sector = Sector.findById({ _id: id });
  console.log(sector);
  return sector;
};
const deleteSector = async (id: string): Promise<any | null> => {
  const sector = Sector.findByIdAndDelete({ _id: id });
  console.log(sector);
  return sector;
};
const updateSector = async ({ id, body }: any): Promise<any | null> => {
  console.log(id, body, 'sdsds');
  const sector = Sector.findByIdAndUpdate(id, body);
  console.log(sector);
  return sector;
};

export const sectorService = {
  createSector,
  getSector,
  getASector,
  deleteSector,
  updateSector,
};
