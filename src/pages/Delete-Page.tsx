import DeletePageStyle from "../styles/Delete-Page-Style";
import SecundaryButton from "../styles/Secundary-Button";
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
      .catch((res) => console.log(res))
      .then(() =>
        setPosts((posts: PostType[]) => [...posts?.filter((e) => e.id !== id)])
      );
  }
  return (
    <DeletePageStyle>
      <div>
        <span>Are you sure you want to delete this item?</span>
        <div>
          <SecundaryButton
            isDelete={false}
            onClick={() =>
              setChangePost(() => {
                return { ...{ id: 0, toDelete: false, toUpdate: false } };
              })
            }
          >
            Cancel
          </SecundaryButton>
          <SecundaryButton
            isDelete={true}
            onClick={() => {
              deleteThePost(changePost.id);
              setChangePost(() => {
                return { ...{ id: 0, toDelete: false, toUpdate: false } };
              });
            }}
          >
            Delete
          </SecundaryButton>
        </div>
      </div>
    </DeletePageStyle>
  );
}
