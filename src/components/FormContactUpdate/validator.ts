import { z } from "zod";

const schema = z.object({
  name: z.string().max(45),
  email: z.string().email("Deve ser um e-mail válido").or(z.literal("")),
  fone: z.string().max(20),
});

export type ContactData = z.infer<typeof schema>;

const schemaUpdade = schema.partial();

export type ContactDataUpdate = z.infer<typeof schemaUpdade>;

export default schemaUpdade;
