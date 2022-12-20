import * as styles from "./index.css";

//stolen from my brother ewe huehuehue... =>
export const cx = (...args) => args.filter(Boolean).join("");

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  onClick,
  ...props
}) {
  return (
    <Component className={cx(..._cx, className)} onClick={onClick} {...props} />
  );
}
// I take full credit >:D

export function Container({ size, space, ...props }) {
  return (
    <Base
      cx={[
        size ? styles.containerVariants[size] : "",
        space ? styles.spacerVariants[space] : "",
      ]}
      {...props}
    />
  );
}

export function Flex({ variant, space, ...props }) {
  return (
    <Base
      cx={[ 
        variant ? styles.flexVariants[variant] : styles.flex,
        space && styles.spacerVariants[space],
      ]}
      {...props}
    />
  );
}

export function Grid(props) {
  return <Base cx={styles.grid} {...props} />;
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

export function Card({ variant, padding, ...props }) {
  return (
    <Base
      cx={[
        variant ? styles.cardVariants[variant] : styles.card,
        padding ? styles.paddingVariants[padding] : "",
      ]}
      {...props}
    />
  );
}

export function Spacer({ size, ...props }) {
  return <Base cx={size && styles.spacerVariants[size]} {...props} />;
}

// typography
export function BannerText({ ...props }) {
  return <Base as="h1" cx={styles.textVariants.banner} {...props} />;
}

export function Heading({ ...props }) {
  return <Base as="h2" cx={styles.textVariants.heading} {...props} />;
}

export function Text({ ...props }) {
  return <Base as="p" cx={styles.textVariants.body} {...props} />;
}

export function SmallText({ ...props }) {
  return <Base as="p" cx={styles.textVariants.small} {...props} />;
}
