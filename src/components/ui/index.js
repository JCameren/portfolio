import * as styles from "./index.css";

//stolen for my brother ewe huehuehue... =>
export const cx = (...args) => args.filter(Boolean).join("");

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}) {
  return <Component className={cx(..._cx, className)} {...props} />;
}
// I take full credit >:D

export function Container({ size, space, ...props }) {
  return (
    <Base
      cx={[
        size ? styles.containerVariants[size] : styles.container,
        space ? styles.spacerVariants[space] : '',
      ]}
      {...props}
    />
  );
}

export function Flex({ cx: _cx = [], ...props }) {
  return (
    <Base
      cx={[styles.flex, styles.list, variant && styles.flexVariants[variant], spacer && styles.spacerVariants[spacer]]}
      {...props}
    />
  );
}

export function Grid(props) {
    return <Base cx={styles.grid} {...props} />
}

export function Button({ variant, ...props }) {
  return (
    <Base
      as="button"
      cx={[variant ? styles.buttonVariants[variant] : styles.button]}
      {...props}
    />
  );
}

export function Card({ variant, ...props }) {
  return (
    <Base
      cx={[variant ? styles.cardVariants[variant] : styles.card]}
      {...props}
    />
  );
}

export function Spacer({ size, ...props }) {
    return <Base  cx={size && styles.spacerVariants[size]}  {...props} />
}

export function Text({ text, ...props }) {

}