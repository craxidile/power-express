// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

// This endpoint uses 'user' access, credentials is required.
export default {
  fetch: withSupabase({ auth: "none" }, async (_req, { supabase }) => {
    // TODO: Change the table_name to your table
    const { data: contacts, error } = await supabase.from('contact').select('*')
      .order('id', { ascending: true });
    const output = contacts.map((contact) => {
      const {
        id,
        type,
        icon,
        text_th,
        text_en,
        url,
        created_at,
      } = contact;
      return {
        id,
        type,
        icon,
        text: {
          th: text_th,
          en: text_en,
        },
        url,
        publishedAt: created_at,
      };
    });

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 },
      );
    }

    return Response.json(output);
  }),
};