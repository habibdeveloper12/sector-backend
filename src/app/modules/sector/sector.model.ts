/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import generateUniqueId from '../../utils/generateUniqueId';
import { ISectors, SectorModel } from './sector.interface';

const CalculatorSchema = new Schema<ISectors, SectorModel>(
  {
    id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    sectors: {
      type: Schema.Types.Mixed,
      required: true,
    },
    agreeToTerms: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

CalculatorSchema.pre('save', function (next) {
  // Ensure that this.id is set to a unique value or remove this block if not needed
  if (!this.id) {
    this.id = generateUniqueId();
  }
  next();
});
export const Sector = model<ISectors, SectorModel>('sector', CalculatorSchema);
