import React, { memo } from "react";
import Sidebar from "./Sidebar";
import { useStyles } from "./styles";
interface IProp {
  children?: React.ReactNode;
}

const DefaultLayout = ({ children }: IProp) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <header className={classes.header}>Adopt me</header> */}
      <div className={classes.mainContainer}>
        <aside className={classes.bodySidebar}>
          <Sidebar />
        </aside>
        <main className={classes.bodyMain}>{children}</main>
      </div>
    </div>
  );
};
export default memo(DefaultLayout);
