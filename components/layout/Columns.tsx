import { ColumnType } from "@/types/layout";
import { JSX } from "react";

interface Props {
  columns: ColumnType[];
}

const Columns: React.FC<Props> = ({ columns }): JSX.Element => (
    <>
        {
            columns.map(({ id, paragraphs, title }) => (
                <div key={id}>
                    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
                    <div className="space-y-4">
                        { 
                            paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-gray-50 leading-relaxed">
                                    {paragraph}
                                </p>
                            )) 
                        }
                    </div>
                </div>
            ))
        }
    </>
)

export default Columns;