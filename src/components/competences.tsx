import {
  DartOriginalIcon,
  DockerOriginalIcon,
  ExpressOriginalIcon,
  FlutterOriginalIcon,
  MongodbOriginalIcon,
  NextjsOriginalIcon,
  NumpyOriginalIcon,
  PandasOriginalIcon,
  PostgresqlOriginalIcon,
  PythonOriginalIcon,
  RailsPlainIcon,
  ReactOriginalIcon,
  RedisOriginalIcon,
  RubyOriginalIcon,
  SocketioOriginalIcon,
  TailwindcssPlainIcon,
  TensorflowOriginalIcon,
  ThreejsOriginalIcon,
  TypescriptPlainIcon,
} from "react-devicons";
import CompetenceCard, { competenceList } from "./competenceCard";

const frontendCompetences: competenceList[] = [
  {
    icon: TypescriptPlainIcon,
    name: "Typescript",
  },
  {
    icon: NextjsOriginalIcon,
    name: "Nextjs",
  },
  {
    icon: ReactOriginalIcon,
    name: "React",
  },
  {
    icon: TailwindcssPlainIcon,
    name: "Tailwind",
  },
  {
    icon: ThreejsOriginalIcon,
    name: "Three",
  },
];

const backendCompetences: competenceList[] = [
  {
    icon: RubyOriginalIcon,
    name: "Ruby",
  },
  {
    icon: RailsPlainIcon,
    name: "Rails",
  },
  {
    icon: SocketioOriginalIcon,
    name: "Socket.io",
  },
  {
    icon: ExpressOriginalIcon,
    name: "Express",
  },
  {
    icon: PostgresqlOriginalIcon,
    name: "PostgreSQL",
  },
  {
    icon: RedisOriginalIcon,
    name: "Redis",
  },
  {
    icon: MongodbOriginalIcon,
    name: "MongoDB",
  },
  {
    icon: DockerOriginalIcon,
    name: "Docker",
  },
];

const aiCompetences: competenceList[] = [
  {
    icon: PythonOriginalIcon,
    name: "Python",
  },
  {
    icon: TensorflowOriginalIcon,
    name: "TensorFlow",
  },
  {
    icon: NumpyOriginalIcon,
    name: "Numpy",
  },
  {
    icon: PandasOriginalIcon,
    name: "Pandas",
  },
];

const mobileCompetences: competenceList[] = [
  {
    icon: DartOriginalIcon,
    name: "Dart",
  },
  {
    icon: FlutterOriginalIcon,
    name: "Flutter",
  },
];

const Competences = () => {
  return (
    <section className="w-full 2xl:h-full xs:h-auto">
      <div className="all-card-container h-full 2xl:grid 2xl:grid-cols-2 gap-11 justify-items-center xs:flex xs:flex-col xs:items-center">
        <CompetenceCard
          name="Frontend"
          skill={frontendCompetences}
        ></CompetenceCard>
        <CompetenceCard
          name="Backend"
          skill={backendCompetences}
        ></CompetenceCard>
        <CompetenceCard name="AI" skill={aiCompetences}></CompetenceCard>
        <CompetenceCard
          name="Mobile"
          skill={mobileCompetences}
        ></CompetenceCard>
      </div>
    </section>
  );
};

export default Competences;
