import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({

  personalizations: [
    {
      to: [{ name: "Evan", email: "evan@evanflynn.com" }],
    },
  ],
  from: (params) => {
      return {
          name: params.formData.get("name"),
          email: params.formData.get("email"),
      }
  },
  subject: 'New contact form submission from portfolio site',
  content: (params) => {
      return {
          text: params.formData.get("message"),
      }
  },
  respondWith: () => {
    return new Response(
      `Thank you for getting in touch! I will respond as soon as possible.`
    );
  },
});
