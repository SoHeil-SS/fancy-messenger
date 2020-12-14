import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import useThunkReducer from "react-hook-thunk-reducer";
import { ToastContainer, toast } from "react-toastify";
import { Item, Menu, Separator, theme, useContextMenu } from "react-contexify";

import DispatchContext, { useDispatch } from "./StateManager/dispatch";

import PersonContainer from "./Components/PersonBox/PersonContainer";
import SearchBar from "./Components/PersonBox/SearchBar";
import PersonList from "./Components/PersonBox/PersonList";
import PersonListItem from "./Components/PersonBox/PersonListItem";

import ChatContainer from "./Components/ChatBox/ChatContainer";
import ChatTitleBar from "./Components/ChatBox/ChatTitleBar";
import ChatList from "./Components/ChatBox/ChatList";
import ChatItem from "./Components/ChatBox/ChatItem";
import ChatInput from "./Components/ChatBox/ChatInput";
import Editing from "./Components/ChatBox/Editing";

import ContextMenu from "./Components/Others/ContextMenu";
import Portal from "./Components/Others/Portal";

import Svg from "./Components/Others/SvgComponents/Svg";
import Path from "./Components/Others/SvgComponents/Path";

import PinIcon from "./Components/Others/SvgComponents/SvgIcons/PinIcon";
import SendIcon from "./Components/Others/SvgComponents/SvgIcons/SendIcon";
import SearchIcon from "./Components/Others/SvgComponents/SvgIcons/SearchIcon";
import CloseIcon from "./Components/Others/SvgComponents/SvgIcons/CloseIcon";
import ThreeDotIcon from "./Components/Others/SvgComponents/SvgIcons/ThreeDotIcon";
import BackArrow from "./Components/Others/SvgComponents/SvgIcons/BackArrow";
import BarIcon from "./Components/Others/SvgComponents/SvgIcons/BarIcon";

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
  onChatMenuClick,
  onSearchClick,
  onPersonMenuClick,
  personClicked,
  saveClicked,
} from "./StateManager/actionCreator";
//
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
  handleChatMenuClick,
  handleSearchClick,
  handlePersonMenuClick,
  handleFilterChats,
  handleFilterPerson,
  handleSelectedPerson,
  toaster,
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
  Item,
  Menu,
  Separator,
  useContextMenu,
  // Custom components =>
  PersonContainer,
  SearchBar,
  PersonList,
  PersonListItem,

  ChatContainer,
  ChatTitleBar,
  ChatList,
  ChatItem,
  ChatInput,
  Editing,

  ContextMenu,
  Portal,
  Path,

  Svg,
  PinIcon,
  SendIcon,
  SearchIcon,
  CloseIcon,
  ThreeDotIcon,
  BackArrow,
  BarIcon,
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
  handleSearchClick,
  handleFilterChats,
  handleFilterPerson,
  handleSelectedPerson,
  toaster,
  idMaker,

  addClicked,
  closeClicked,
  copyClicked,
  deleteClicked,
  editClicked,
  editCloseClicked,
  forwardClicked,
  onChatMenuClick,
  onSearchClick,
  onPersonMenuClick,
  onInputChange,
  onKeyPress,
  personClicked,
  saveClicked,
  // Variables =>
  menuId,
  svgPath,
  theme,
  tempPersons,
});

export function useImport() {
  return useContext(imports);
}
