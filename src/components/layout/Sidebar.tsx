import { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getSelectCategory,
  setCategory,
} from "../../redux/dashboard";
import clsx from "clsx";
import { useStyles } from "./styles";

function Sidebar() {
  const classes = useStyles();

  const selectedCategory = useAppSelector(getSelectCategory);
  const [categories, setCategories] = useState<null | any>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {});
  }, []);

  const handleClickMenuItem = (id: number) => {
    dispatch(setCategory(id));
  };

  return (
    <div className={classes.sidebarContainer}>
      {/* <Button>click</Button> */}
      {categories?.map((category: any) => (
        <div
          className={clsx(
            classes.menuItem,
            category.id == selectedCategory ? classes.selectedMenu : ""
          )}
        >
          <a
            onClick={() => {
              handleClickMenuItem(category.id);
            }}
          >
            {category.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
