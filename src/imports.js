import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import useThunkReducer from "react-hook-thunk-reducer";
import { ToastContainer, toast } from "react-toastify";

import DispatchContext, { useDispatch } from "./stateManager/dispatch";
import SearchBar from "./Components/personContainer/SearchBar";
import PersonList from "./Components/personContainer/PersonList";
import PersonListItem from "./Components/personContainer/PersonListItem";

import ChatContainer from "./Components/chatBox/ChatContainer";
import ChatTitleBar from "./Components/chatBox/ChatTitleBar";
import ChatInput from "./Components/chatBox/ChatInput";
import ChatList from "./Components/chatBox/ChatList";
import Editing from "./Components/chatBox/Editing";

import ChatItem from "./Components/chatBox/ChatItem";
import ContextMenu from "./Components/Others/ContextMenu";
import Portal from "./Components/Others/Portal";
import Svg from "./Components/Others/Svg";
import Path from "./Components/Others/Path";

import { reducer } from "./stateManager/reducer";
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
} from "./stateManager/actionCreator";
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
} from "./stateManager/eventHandlers";

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
