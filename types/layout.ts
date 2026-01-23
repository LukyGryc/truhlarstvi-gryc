import { JSX } from "react";

export interface ColumnType {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface StatType {
  id: string;
  value: number;
  description: string;
  type: "+" | "%";
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

export interface NavLinkType {
  id: string;
  href: string;
  label: string;
}