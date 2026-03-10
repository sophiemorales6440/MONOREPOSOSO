import React, { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

const ProgramPage: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch("http://localhost:3310/api/programs");
      const programs = await response.json();
      setPrograms(programs);
    };

    fetchPrograms();
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramPage;