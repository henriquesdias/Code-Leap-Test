import DeletePageStyle from "../styles/Delete-Page-Style";
import ButtonStyle from "../styles/Button";
import { ChangePostState } from "../protocols";
import deletePost from "../actions/delete-post";
import { PostType } from "../protocols";

interface IDeletePage {
  setChangePost: Function;
  changePost: ChangePostState;
  setPosts: Function;
}

export default function DeletePage({
  setChangePost,
  changePost,
  setPosts,
}: IDeletePage) {
  function deleteThePost(id: number) {
    deletePost(id)
      .catch(() => alert("Unable to delete post, please reload page"))
      .then(() =>
        setPosts((posts: PostType[]) => [...posts?.filter((e) => e.id !== id)])
      );
  }
  return (
    <DeletePageStyle>
      <div>
        <span>Are you sure you want to delete this item?</span>
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
            backgroundColor="#FF5151"
            color="#ffffff"
            border={false}
            onClick={() => {
              deleteThePost(changePost.id);
              setChangePost(() => {
                return { ...{ id: 0, toDelete: false, toUpdate: false } };
              });
            }}
          >
            Delete
          </ButtonStyle>
        </div>
      </div>
    </DeletePageStyle>
  );
}
