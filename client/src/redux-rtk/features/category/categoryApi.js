import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';
import { setCategories } from "./categoriesSlice";
// import { setCategories } from "../chat/categoriesSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all all tarots endpoint here
        getCategories: builder.query({
            query: () => 'categories',
            keepUnusedDataFor: 600,
            providesTags: ['Categories'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    // set the data to redux state
                    dispatch(setCategories(result?.data?.data))

                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

      

    })
});

export const {
    useGetCategoriesQuery
} = categoryApi;