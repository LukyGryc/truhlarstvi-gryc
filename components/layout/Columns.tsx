'use client';
import { ColumnType } from "@/types/layout";
import { motion } from "motion/react";
import { JSX } from "react";

interface Props {
  columns: ColumnType[];
}

const Columns: React.FC<Props> = ({ columns }): JSX.Element => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="grid mb-10 md:grid-cols-2 gap-12 md:gap-16"
    >
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
    </motion.div>
)

export default Columns;