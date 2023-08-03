import { z } from "zod";

const schema = z.object({
  name: z.string(),
});

export type ContactData = z.infer<typeof schema>;

export default schema;
