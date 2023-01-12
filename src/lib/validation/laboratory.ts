import { Static, Type } from "@sinclair/typebox";

export const laboratorySchema = Type.Object(
  {
    laboratory_name: Type.String(),
    description: Type.Optional(Type.String()),
  },
  { additionalProperties: false }
);

export type LaboratoryData = Static<typeof laboratorySchema>;
