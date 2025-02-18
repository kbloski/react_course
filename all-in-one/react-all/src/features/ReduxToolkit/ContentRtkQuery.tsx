import { useAddPostMutation, useGetPostsQuery } from "./postApiRtkQuery";

function ContentRtkQuery() {
    const { data, error, isLoading } = useGetPostsQuery();
    const [addPost, { isError: isAddPostError, isLoading: isLoadingAddPost }] =
        useAddPostMutation();

    const handleAddPost = async () => {
        try {
            await addPost({
                title: "New Post",
                content: "Post content",
                date: "",
            }).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <div>
                <div>Posts Mutation Add</div>
                <button onClick={handleAddPost}>Add post</button>
                <div>{isLoadingAddPost && "Loading"}</div>
                <div>{isAddPostError && "Error in add post"}</div>
            </div>
            <hr />
            <div>
                <div>Posts Query Fetch</div>
                {error && ( 
                    <div>
                        Error:{" "}
                        {"status" in error ? error.status : "Unknown status"} -{" "}
                        {"data" in error
                            ? JSON.stringify(error.data)
                            : "Unknown error"}
                    </div>
                )}
                {data &&
                    data.map((post) => <div key={post.id}>{post.title}</div>)}
            </div>
        </>
    );
}

export default ContentRtkQuery;
