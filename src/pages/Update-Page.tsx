import UpdatePostStyle from "../styles/Update-Page-Style";
import ChangePostStyle from "../styles/Change-Post-Style";
import ButtonStyle from "../styles/Button";
import useForm from "../hooks/useForm";
import { ChangePostState } from "../protocols";
import { PostType } from "../protocols";
import updatePost from "../actions/update-post";

interface IUpdatePage {
  setChangePost: Function;
  setPosts: Function;
  changePost: ChangePostState;
}

export default function UpdatePage({
  setChangePost,
  setPosts,
  changePost,
}: IUpdatePage) {
  const { formData, handleInputChange, handleSubmit } = useForm(
    { title: "", content: "" },
    submitData
  );
  function submitData() {
    updatePost(changePost.id, formData)
      .catch(() => alert("Unable to update the post, please reload the page"))
      .then(() => {
        setChangePost(() => {
          return { ...{ id: 0, toDelete: false, toUpdate: false } };
        });
        setPosts((posts: PostType[]) => {
          return [
            ...posts.map((e) => {
              if (e.id === changePost.id) {
                e.title = formData.title;
                e.content = formData.content;
                return e;
              }
              return e;
            }),
          ];
        });
      });
  }

  return (
    <UpdatePostStyle>
      <ChangePostStyle onSubmit={handleSubmit}>
        <h2>Edit item</h2>
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
          <ButtonStyle
            backgroundColor="#ffffff"
            color="#000000"
            border={true}
            onClick={() =>
              setChangePost(() => {
                return { ...{ id: 0, toDelete: false, toUpdate: false } };
              })
            }
          >
            Cancel
          </ButtonStyle>
          <ButtonStyle
            backgroundColor="#47B960"
            color="#ffffff"
            border={false}
            isDisabled={
              formData.title.length === 0 || formData.content.length === 0
            }
            disabled={
              formData.title.length === 0 || formData.content.length === 0
            }
            type="submit"
            onClick={handleSubmit}
          >
            Salvar
          </ButtonStyle>
        </div>
      </ChangePostStyle>
    </UpdatePostStyle>
  );
}
