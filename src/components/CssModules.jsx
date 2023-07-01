import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.titleStyle}>--CSS Styles--</p>
      <button className={classes.buttonStyle}>FIGHT!!!!!!!</button>
    </div>
  );
};
