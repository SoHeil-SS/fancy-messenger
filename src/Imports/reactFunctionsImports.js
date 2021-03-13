import { createContext, useContext, useEffect, useState, useMemo } from "react";

import { createPortal } from "react-dom";

import useThunkReducer from "react-hook-thunk-reducer";
import { toast } from "react-toastify";
import { useContextMenu } from "react-contexify";
import { useTheme } from "@material-ui/core";

export const reactFunctionsImports = {
  createPortal,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useTheme,
  toast,
  useThunkReducer,
  useContextMenu,
};
