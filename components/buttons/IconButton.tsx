import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  IconButton,
  SvgIconTypeMap,
  IconButtonProps,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
  })
);

interface SelectInputProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  buttonProps?: IconButtonProps;
}

const ButtonIcon: React.FC<SelectInputProps> = ({ Icon, buttonProps }) => {
  const classes = useStyles();
  return (
    <IconButton {...buttonProps} className={classes.root} color="inherit">
      <Icon fontSize="large" />
    </IconButton>
  );
};

export default ButtonIcon;
