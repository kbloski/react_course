import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { createRandomPost } from "../utils/createRandomPost";



export const PostContext = createContext()

export function PostProvider ({children}){
      const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
      );
      const [searchQuery, setSearchQuery] = useState("");

    
      // Derived state. These are the posts that will actually be displayed
      const searchedPosts =
        searchQuery.length > 0
          ? posts.filter((post) =>
              `${post.title} ${post.body}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
          : posts;
    
      const handleAddPost = useCallback( function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
      })
    
      const handleClearPosts = useCallback( function handleClearPosts() {
        setPosts([]);
      })

      const value = useMemo(() => {
        return {
          posts: searchedPosts,
          onAddPost: handleAddPost,
          onClearPosts: handleClearPosts,
          searchQuery,
          setSearchQuery
      }
    }, [ searchQuery, searchedPosts, handleAddPost, handleClearPosts])


      return <PostContext.Provider value={value}>
        {children}
      </PostContext.Provider>
}

export default function usePosts(){
  const context = useContext(  PostContext );
  return context;
}