import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";
import { setChallenges } from "./challengesSlice.js";

export const challengesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // all all tarots endpoint here
    getAllChallenges: builder.query({
      query: () => "challenges",
      keepUnusedDataFor: 600,
      providesTags: ["challenges"],
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        try {
          const result = await queryFulfilled;
          // get the user from redux state
          const user = getState().auth.user;

          // set the data to redux state
          // console.log(result, "result")
          // add isSolved key to each challenge by checking if the challenge is solved by the user
          const challenges = result?.data?.data.map((challenge) => {
            if (user?.solvedChallenges.includes(challenge._id)) {
              return { ...challenge, isSolved: true };
            }
            return challenge;
          });

          dispatch(setChallenges(challenges));
        } catch (error) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),

    submitSolution: builder.mutation({
      query: (data) => ({
        url: `challenges/submit/${data.id}`,
        method: "POST",
        body: data.submission,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        try {
          // add isSoloved key to this challenge in redux state by finding the id if the response is success
          const result = await queryFulfilled;
          if (result?.data?.success) {
            const challenges = getState().challenges.challenges;
            const updatedChallenges = challenges.map((challenge) => {
              if (challenge._id === arg.id) {
                return { ...challenge, isSolved: true };
              }
              return challenge;
            });
            dispatch(setChallenges(updatedChallenges));
          }
        } catch (error) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),

    getRankings: builder.query({
      query: () => "challenges/rankings",
      keepUnusedDataFor: 600,
      providesTags: ["rankings"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),

    createChallengeByUser: builder.mutation({
      query: (data) => ({
        url: `challenges`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          toast.success(result.data.message);
          // refetch the challenges
          dispatch(challengesApi.endpoints.getAllChallenges.initiate());
        } catch (error) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),
  }),
});

export const {
  useGetAllChallengesQuery,
  useSubmitSolutionMutation,
  useGetRankingsQuery,
  useCreateChallengeByUserMutation,
} = challengesApi;
