import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

const Avatar = ({ hasBorder = true, ...props }: Props) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};

export default Avatar;
