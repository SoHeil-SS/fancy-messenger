import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { createPortal } from "react-dom";

import useThunkReducer from "react-hook-thunk-reducer";
import { ToastContainer, toast } from "react-toastify";
import { Item, Menu, Separator, theme, useContextMenu } from "react-contexify";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import DispatchContext, { useDispatch } from "../StateManager/dispatch";

import { reducer } from "../StateManager/reducer";

import { menuId, tempPersons, svgPath } from "../Others/constants";

export const otherImports = {
  createPortal,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  ToastContainer,
  toast,
  Item,
  Menu,
  Separator,
  Button,
  Col,
  Container,
  Modal,
  Row,
  useThunkReducer,
  useContextMenu,
  DispatchContext,
  useDispatch,
  reducer,
  menuId,
  svgPath,
  theme,
  tempPersons,
};
