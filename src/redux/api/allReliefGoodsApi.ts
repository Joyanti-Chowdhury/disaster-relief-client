/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi} from "./baseApi";



export const allReliefGoodsApi = baseApi.injectEndpoints({
//  reducerPath: "allReliefGoodsApi",
  endpoints: (builder) => ({
    getAllReliefGoods: builder.query({
      query: () => ({
        url: "/relief-goods",
        method: "GET",
      }),
    }),
    postReliefGoods: builder.mutation <any, any>({
      query: (args) => {
        console.log(args);
        return {
          url: "/relief-goods",
          method: "POST",
        };
      },
    }),
  }),
});

export const { useGetAllReliefGoodsQuery, usePostReliefGoodsMutation } :any = allReliefGoodsApi;


export default allReliefGoodsApi.reducer;











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