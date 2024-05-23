/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

export const allReliefGoodsApi = baseApi.injectEndpoints({
  //  reducerPath: "allReliefGoodsApi",
  endpoints: (builder) => ({
    getAllReliefGoods: builder.query({
      query: () => ({
        url: "/relief-goods",
        method: "GET",
      }),
    }),
    getSingleReliefGoods: builder.query({
      query: (id: string) => ({
        url: `/relief-goods/${id}`,
        method: "GET",
      }),
    }),
    postReliefGoods: builder.mutation<any, any>({
      query: (args) => {
        console.log(args);
        return {
          url: "/relief-goods",
          method: "POST",
        };
      },
    }),

    putReliefGoods: builder.mutation<any, any>({
      query: (id: any) => {
        return {
          url: `/relief-goods/${id}`,
          method: "PUT",
          // transformResponse:(data:string)=>{
          //     return JSON.parse(data)
          // }
        };
      },
    }),

    getAllSupply: builder.query({
      query: (limit = 1) => ({
        url: `/supply?limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    getSingleSupply: builder.query({
      query: (data) => ({
        url: `/supply/${data.id}`,
        method: "GET",
      }),
    }),
    createSupply: builder.mutation({
      query: (data) => {
        return {
          url: `/supply/create-supply`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["supplies"],
    }),
    deleteSupply: builder.mutation({
      query: (data) => ({
        url: `/supply/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
    updateSupply: builder.mutation({
      query: (data) => ({
        url: `/supply/${data.id}`,
        method: "PATCH",
        body: data.payload,
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useGetAllReliefGoodsQuery,
  useGetSingleReliefGoodsQuery,
  usePutReliefGoodsMutation,
  usePostReliefGoodsMutation,
  useGetAllSupplyQuery,
  useGetSingleSupplyQuery,
  useCreateSupplyMutation,
  useUpdateSupplyMutation,
  useDeleteSupplyMutation,
} = allReliefGoodsApi;

// export default allReliefGoodsApi.reducer;

// export const allReliefGoodsApi = createApi({
//     reducerPath: 'allReliefGoodsApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/relief-goods' }),
//     endpoints: (builder) => ({
//       getAllReliefGoods: builder.query({
//         query: () => `allReliefData`,
//       }),
//     }),
//   })
//   export const {useGetAllReliefGoodsQuery} = allReliefGoodsApi;
