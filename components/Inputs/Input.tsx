import React from "react";
import {
  TextField,
  createStyles,
  makeStyles,
  Theme,
  Button,
  FilledTextFieldProps,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: theme.spacing(1),
      minWidth: 120,
    },
    inputText: {
      fontSize: "1.5rem",
    },
    inputLabel: {
      color: theme.palette.text.primary,
    },
  })
);

interface InputProps {
  label?: string;
  type?: "text" | "button" | "submit" | "select";
  name?: string;
  autoFocus?: boolean;
  required?: boolean;
  onChange?: FilledTextFieldProps["onChange"];
  onClick?: () => void;
  inputRef?: FilledTextFieldProps["inputRef"];
  inputProps?: FilledTextFieldProps;
  isPassword?: boolean;
  options?: { value: string; label: string }[];
  selectProps?: SelectProps;
}

const Input: React.FC<InputProps> = ({
  label,
  autoFocus = false,
  type = "text",
  name,
  onChange,
  onClick,
  required,
  inputRef,
  isPassword,
  options,
  selectProps,
  inputProps,
}) => {
  const classes = useStyles();

  switch (type) {
    case "text":
      return (
        <TextField
          autoFocus={autoFocus}
          className={classes.root}
          name={name}
          {...inputProps}
          inputRef={inputRef}
          onChange={onChange}
          required={required}
          label={label}
          variant="filled"
          color="secondary"
          type={isPassword ? "password" : "text"}
          InputProps={{
            classes: {
              input: classes.inputText,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.inputText,
            },
            className: classes.inputLabel,
          }}
        />
      );

    case "submit":
      return (
        <Button
          type="submit"
          className={[classes.root, classes.inputText].join(" ")}
          variant="contained"
          color="secondary"
          onClick={onClick}
        >
          {label}
        </Button>
      );

    case "button":
      return (
        <Button
          className={[classes.root, classes.inputText].join(" ")}
          variant="contained"
          color="secondary"
          onClick={onClick}
        >
          {label}
        </Button>
      );
    case "select":
      return (
        <FormControl className={[classes.root].join(" ")}>
          <InputLabel
            className={classes.inputText}
            color="secondary"
            variant="filled"
          >
            {label}
          </InputLabel>
          <Select
            name={name}
            variant="filled"
            color="secondary"
            className={classes.inputText}
            {...selectProps}
          >
            {options?.map((option) => (
              <MenuItem
                key={option.value + option.label}
                className={classes.inputText}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
  }
};

export default Input;
