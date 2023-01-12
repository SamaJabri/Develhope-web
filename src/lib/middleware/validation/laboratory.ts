import { Static, Type } from "@sinclair/typebox";

const laboratorySchema = Type.Object(
  {
    laboratory_name: Type.String(),
    description: Type.Optional(Type.String()),
  },
  { additionalProperties: false }
);

type LaboratoryData = Static<typeof laboratorySchema>;

export {
  laboratorySchema,
  LaboratoryData
}