import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="app">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
