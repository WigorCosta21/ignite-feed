import { FormEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import Avatar from "./Avatar";
import Comment from "./Comment";

import { IPost } from "../types/Post";

import styles from "./Post.module.css";
type Props = {
  post: IPost;
};

const Post = ({ post }: Props) => {
  const [comments, setComments] = useState<string[]>(["Post muito bacana!!!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments((prevComments) => [...prevComments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event: FormEvent) => {
    (event.target as HTMLTextAreaElement).setCustomValidity("");
    setNewCommentText((event.target as HTMLFormElement).value);
  };

  const handleNewCommentInvalid = (event: FormEvent) => {
    (event.target as HTMLTextAreaElement).setCustomValidity(
      "Esse campo é obrigatório!"
    );
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithouDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithouDeletedOne);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};

export default Post;
