
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaJava, FaPhp } from "react-icons/fa";
import { SiJquery, SiCsharp, SiMysql, SiPostgresql } from "react-icons/si";

export const Skilss = () => {

  const [skill, setSkill] = useState('fronEnd');

  const handleChangeF = () => {
    setSkill('fronEnd');
  }
  const handleChangeBK = () => {
    setSkill('backEnd');
  }
  const handleChangeB = () => {
    setSkill('baseDados');
  }

  return (
    <div className="container mb-5">
      <button type="button" className="btn btn-outline-primary m-2" onClick={handleChangeF}>front end</button>
      <button type="button" className="btn btn-outline-warning m-2" onClick={handleChangeBK}>back-end</button>
      <button type="button" className="btn btn-outline-success m-2" onClick={handleChangeB}>bases de datos</button>

      {skill === 'fronEnd' && (
        <section>
          <div className="container-icons">
            <FaHtml5 /> <FaCss3Alt /> <FaJs /> <FaBootstrap /> <SiJquery />
          </div>
        </section>
      )}

      {skill === 'backEnd' && (
        <section>
        <div className="container-icons">
          <FaJava /> <SiCsharp /> <FaPhp />
        </div>
      </section>
      )}

      {skill === 'baseDados' && (
        <section>
        <div className="container-icons">
          <SiMysql /><SiPostgresql />
        </div>
      </section>
      )}

    </div>
  )
}
