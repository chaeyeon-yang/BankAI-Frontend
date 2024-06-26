import store from "libs/store";

import { Provider } from "react-redux";
import PwdKeyboard from ".";
import { useState } from "react";

export default {
  component: PwdKeyboard,
  title: "organisms/pwdKeyboard",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  input: "12",
  setInput: () => {
    console.log("setInput");
  },
};





