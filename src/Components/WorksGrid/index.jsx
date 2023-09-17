import React from "react";
import Image from "next/image";
import styles from "@/Components/WorksGrid/WorksGrid.module.css";

const Works = ({ sources }) => {
  return (
    <div>
      <div className={styles.gridbox}>
        {sources &&
          sources.length > 0 &&
          sources.map((element) => (
            <div key={element} className="bg-primary3 rounded flex flex-col">
              <Image
                src={`./assets/Images/${element[0]}`}
                alt="image of work" width={1090} height={1080}
              />
              <div className="flex justify-center pb-3">{element[1]}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Works;
