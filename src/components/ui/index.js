import Link from "next/link";
import * as styles from "./index.css";

export const cx = (...args) => args.filter(Boolean).join("");

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}) {
  return <Component className={cx(..._cx, className)} {...props} />;
}

export function Flex({ variant, cx: _cx = [], ...props }) {
  return (
    <Base
      cx={[styles.flex, variant && styles.flexVariants[variant], { ...props }]}
    />
  );
}
