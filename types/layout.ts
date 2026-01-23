import { JSX } from "react";

export interface ColumnType {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface StatType {
  id: string;
  value: string;
  description: string;
}

export interface ContactItem{
  id: string;
  icon: JSX.Element;
  firstRow: string;
  secondRow: string;
  link?: string;
}

export interface Card {
  title: string;
  description: string;
}