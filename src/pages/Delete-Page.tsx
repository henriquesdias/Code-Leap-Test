import DeletePageStyle from "../styles/Delete-Page-Style";
import SecundaryButton from "../styles/Secundary-Button";
import { DeletePostState } from "../protocols";
import deletePost from "../actions/delete-post";
import { PostType } from "../protocols";

interface IDeletePage {
  setPostDeleted: Function;
  postDeleted: DeletePostState;
  setPosts: Function;
  posts: PostType[] | null;
}

export default function DeletePage({
  setPostDeleted,
  postDeleted,
  setPosts,
  posts,
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
              setPostDeleted(() => {
                return { ...{ id: 0, toDelete: false } };
              })
            }
          >
            Cancel
          </SecundaryButton>
          <SecundaryButton
            isDelete={true}
            onClick={() => {
              deleteThePost(postDeleted.id);
              setPostDeleted(() => {
                return { ...{ id: 0, toDelete: false } };
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
