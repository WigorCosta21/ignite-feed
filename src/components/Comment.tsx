import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";

type Props = {
  content: string;
};

const Comment = ({ content }: Props) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/WigorCosta21.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wigor Ribeiro</strong>
              <time
                title="10 de Novembro às 18:48h"
                dateTime="2024-11-10 18:48:10"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
