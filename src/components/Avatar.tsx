import styles from "./Avatar.module.css";

type Props = {
  src: string;
  hasBorder?: boolean;
};

const Avatar = ({ src, hasBorder = true }: Props) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};

export default Avatar;
