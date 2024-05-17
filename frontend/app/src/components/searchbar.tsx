"use client";
import styles from "./searchbar.module.css";

export default function Searchbar(props: any) {
  return (
    <div className={styles.searchbar}>
      <input type="search" placeholder="Search" onChange={props.updatePosts} />
      {/* <i className="fa fa-search" aria-hidden={true} /> */}
    </div>
  );
}
