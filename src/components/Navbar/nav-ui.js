import { Base } from "../ui-library/index";
import Link from "next/link";

export function NavLink({ active, ...props }) {
  return <Base as={Link} {...props} />;
}
