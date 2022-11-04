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
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/" },
    }),
});

// import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// export const onRequest: PagesFunction = mailChannelsPlugin({
//   personalizations: [
//     {
//       to: [{ name: "Evan Flynn", email: "evan@evanflynn.com" }],
//     },
//   ],
//   from: {
//     name: "ACME Support",
//     email: "support@example.com",
//   },
//   respondWith: () => {
//     return new Response(
//       `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
//     );
//   },
// });