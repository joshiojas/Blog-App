import Link from "next/link";
import styles from "./navbar.module.css";

import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="mb-32">
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <Link href="/">
            <h1 className="font-extralight">Brewed Words</h1>
          </Link>
        </div>
        <div className={styles.navbar__links}>
          <Link href="/blogs">Blogs</Link>
          {session === null ? (
            <>
              <Link href="/api/auth/signin">Sign In</Link>
              <Link href="/signup">Sign Up</Link>
            </>
          ) : (
            <>
              <Link href="/editor">New Blog</Link>
              <Link href="/api/auth/signout">Sign Out</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
