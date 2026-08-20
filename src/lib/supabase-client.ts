import { createClient } from "@supabase/supabase-js";

// URL y llave "publishable" (anon) del proyecto de Supabase de Xentra.
// Esta llave está pensada para vivir en el código del navegador — a diferencia
// de la service_role key, no da acceso de escritura/lectura libre: lo que puede
// o no puede hacer se controla con las políticas de Row Level Security (RLS)
// definidas en la base de datos (ver tabla `leads`, que solo permite INSERT
// público, nunca SELECT/UPDATE/DELETE desde el navegador).
const SUPABASE_URL = "https://ethzaifwvmeaulrrpyis.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_QVpLqnvWLvkgy94Pgm7tBg_P4TfghIg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export type LeadInsert = {
  nombre: string;
  email: string;
  telefono?: string | null;
  programa_interes?: string | null;
  mensaje?: string | null;
  origen?: string;
};
