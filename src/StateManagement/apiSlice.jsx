import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/",
    responseHandler: async (response) => {
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message || "Unknown error");
      }
      return json;
    },
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "?results=50",
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
