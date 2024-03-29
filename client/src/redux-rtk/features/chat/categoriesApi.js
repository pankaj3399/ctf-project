import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';
import { chatLogs, setCategories } from "./categoriesSlice";

export const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all all chats endpoint here
        getAllCategories: builder.query({
            query: () => '/categories',
            keepUnusedDataFor: 600,
            providesTags: ['categories'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setCategories(result.data.data))
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // chat endpoint here
        createChat: builder.mutation({
            query: (data) => ({
                url: 'chat',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Chats"],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    // toast.success(result.data.message);
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

    })
});

export const {
    useCreateChatMutation,
    useGetChatsByAuthIdQuery
} = categoriesApi;