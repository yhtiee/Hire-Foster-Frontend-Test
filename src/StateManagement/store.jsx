import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "?results=50",
      transformResponse: (response) => {
        const data = response.results.map((item, index) => {
          return {
            ...item,
            id: index + 1,
          };
        });
        return data;
    },
}),
}),
});

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
