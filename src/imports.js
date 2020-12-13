import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import useThunkReducer from "react-hook-thunk-reducer";
import { ToastContainer, toast } from "react-toastify";
import { Item, Menu, Separator, theme } from "react-contexify";

import DispatchContext, { useDispatch } from "./StateManager/dispatch";
import SearchBar from "./Components/PersonContainer/SearchBar";
import PersonList from "./Components/PersonContainer/PersonList";
import PersonListItem from "./Components/PersonContainer/PersonListItem";

import ChatContainer from "./Components/ChatBox/ChatContainer";
import ChatTitleBar from "./Components/ChatBox/ChatTitleBar";
import ChatInput from "./Components/ChatBox/ChatInput";
import ChatList from "./Components/ChatBox/ChatList";
import Editing from "./Components/ChatBox/Editing";

import ChatItem from "./Components/ChatBox/ChatItem";
import ContextMenu from "./Components/Others/ContextMenu";
import Portal from "./Components/Others/Portal";
import Svg from "./Components/Others/SvgComponents/Svg";
import Path from "./Components/Others/SvgComponents/Path";

import { reducer } from "./StateManager/reducer";
import {
  addClicked,
  closeClicked,
  copyClicked,
  deleteClicked,
  editClicked,
  editCloseClicked,
  forwardClicked,
  onInputChange,
  onKeyPress,
  personClicked,
  saveClicked,
} from "./StateManager/actionCreator";
import {
  handleAddChat,
  handleCancelEdit,
  handleCloseChat,
  handleCopyChat,
  handleDeleteChat,
  handleDisplayMenu,
  handleEditChat,
  handleForwardChat,
  handleGetTime,
  handleInputChange,
  handleKeyPress,
  handlePersonClick,
  handleSaveChat,
  handleSortPersons,
  idMaker,
} from "./StateManager/eventHandlers";

import { menuId, tempPersons, svgPath } from "./constants";

const imports = createContext({
  //React built-in components =>
  createPortal,
  useEffect,
  useState,
  // Installed react components =>
  ToastContainer,
  toast,
  ContextMenu,
  Item,
  Menu,
  Separator,
  theme,
  // Custom components =>
  SearchBar,
  PersonList,
  PersonListItem,
  ChatContainer,
  ChatTitleBar,
  ChatInput,
  ChatList,
  Editing,
  ChatItem,
  Portal,
  Path,
  Svg,
  // Installed react hooks =>
  useThunkReducer,
  // Custom Hooks =>
  DispatchContext,
  useDispatch,
  // Functions =>
  reducer,
  handleAddChat,
  handleCancelEdit,
  handleCloseChat,
  handleCopyChat,
  handleDeleteChat,
  handleDisplayMenu,
  handleEditChat,
  handleForwardChat,
  handleGetTime,
  handleInputChange,
  handleKeyPress,
  handlePersonClick,
  handleSaveChat,
  handleSortPersons,
  idMaker,
  addClicked,
  closeClicked,
  copyClicked,
  deleteClicked,
  editClicked,
  editCloseClicked,
  forwardClicked,
  onInputChange,
  onKeyPress,
  personClicked,
  saveClicked,
  // Variables =>
  menuId,
  svgPath,
  tempPersons,
});

export function useImport() {
  return useContext(imports);
}
