import ChangePostStyle from "../styles/Change-Post-Style";
import PrincipalButton from "./Principal-Button";
import useForm from "../hooks/useForm";
import createPost from "../actions/create-post";
import { PostType } from "../protocols";

interface ICreatePost {
  setPosts: Function;
}

export default function CreatePost({ setPosts }: ICreatePost) {
  const { formData, handleInputChange, handleSubmit } = useForm(
    { title: "", content: "" },
    submitData
  );
  function submitData() {
    const username = localStorage.getItem("username");
    const data = {
      ...formData,
      username,
    };
    createPost(data)
      .catch(() => alert("Unable to create post, please reload page"))
      .then((res) => {
        setPosts((posts: PostType[]) => [{ ...res }, ...posts]);
      });
  }
  return (
    <ChangePostStyle onSubmit={handleSubmit}>
      <h2>What's on your mind?</h2>
      <span>Title</span>
      <input
        type="text"
        placeholder="Hello World"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <span>Content</span>
      <input
        type="text"
        placeholder="Content Here"
        name="content"
        value={formData.content}
        onChange={handleInputChange}
      />
      <div>
        <PrincipalButton
          isDisabled={
            formData.title.length === 0 || formData.content.length === 0
          }
        >
          Create
        </PrincipalButton>
      </div>
    </ChangePostStyle>
  );
}
