import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Definicja typu dla pojedynczego posta
type Post = {
    id: number; // Identyfikator posta
    title: string; // Tytuł posta
    content: string; // Treść posta
    date: string; // Data opublikowania posta
};

// Tworzenie API za pomocą RTK Query
export const postApi = createApi({
    reducerPath: "fakeDataApi", // Unikalna nazwa dla reducer'a w store
    tagTypes: ["posts"], // Typy tagów używane do invalidowania cache
    baseQuery: fetchBaseQuery({ baseUrl: "/" }), // Bazowy URL dla zapytań
    endpoints: (builder) => ({
        // Endpoint do pobierania postów
        getPosts: builder.query<Post[], void>({
            query: () => `posts.json`, // Endpoint do pobrania danych
            providesTags: ["posts"], // Dostarcza tagi do cache (do późniejszego invalidowania)
        }),
        // Endpoint do dodawania nowego posta
        addPost: builder.mutation({
            query: ({ title, content }: Omit<Post, "id">) => ({
                url: "posts", // Endpoint do dodania posta
                method: "POST", // Metoda HTTP
                body: { title, content }, // Przesyłane dane w ciele żądania
            }),
            invalidatesTags: ["posts"], // Invaliduje cache postów po dodaniu nowego
        }),
    }),
});

// Eksportowanie hooków do używania w komponentach React
export const {
    useGetPostsQuery, // Hook do pobierania postów
    useAddPostMutation, // Hook do dodawania postu
} = postApi;
