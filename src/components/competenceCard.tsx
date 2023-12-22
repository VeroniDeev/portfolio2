import { FC } from "react";

export interface competenceList {
  icon: any;
  name: string;
}

interface CompetenceCardProps {
  name: string;
  skill: competenceList[];
}

const CompetenceCard: FC<CompetenceCardProps> = ({ name, skill }) => {
  return (
    <div className="card-container 2xl:w-4/6 2xl:h-3/4 border-2 border-black rounded-lg xs:w-5/6 xs:h-auto">
      <div className="card-header flex justify-center">
        <h4 className="border-b-2 border-l-2 border-r-2 border-black rounded-b-lg py-2 px-7 2xl:text-xl font-semibold xs:text-xs">
          {name}
        </h4>
      </div>
      <div className="card-body grid 2xl:grid-cols-3 2xl:p-4 xs:p-2 xs:grid-cols-2">
        {skill.map((el, i) => {
          const IconComponent = el.icon;
          return (
            <div className="skill flex items-center" key={i}>
              <IconComponent size="40%" />
              <span className="font-medium 2xl:text-xl xs:text-xs">
                {el.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompetenceCard;
