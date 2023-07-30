import { z } from "zod";

const schema = z.object({
  name: z.string().max(45).nonempty("Campo obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  fone: z.string().max(20).nonempty("Telefone deve ser informado"),
});

export type ContactData = z.infer<typeof schema>;

export default schema;
