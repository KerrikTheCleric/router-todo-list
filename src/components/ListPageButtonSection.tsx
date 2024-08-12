import { ReactElement } from "react";
import "./ListPageButtonSection.css";

interface IListPageButtonSectionProps {
  onSortByTimeClick: () => void;
  onSortByAuthorClick: () => void;
}

export default function IListPageButtonSection({ onSortByTimeClick, onSortByAuthorClick }: IListPageButtonSectionProps): ReactElement {

  return (
    <section className="listPageButtonSection">
      <button type="button" onClick={() => onSortByTimeClick()}>Sort By Time </button>
      <button type="button" onClick={() => onSortByAuthorClick()}>Sort By Author </button>
    </section>
  );
}